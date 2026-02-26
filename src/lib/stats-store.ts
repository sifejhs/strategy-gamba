/**
 * In-memory event store for stats. For production with multiple instances, use Vercel KV or Upstash Redis.
 * See docs/DAY-ONE-RANKING.md for enabling Vercel KV.
 */
export type EventType = "pageview" | "download_click";

export interface StoredEvent {
  type: EventType;
  sessionId: string;
  timestamp: number;
}

const events: StoredEvent[] = [];
const MAX_EVENTS = 100_000;

function prune() {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  while (events.length > MAX_EVENTS || (events[0] && events[0].timestamp < weekAgo)) {
    events.shift();
  }
}

export function addEvent(type: EventType, sessionId: string) {
  prune();
  events.push({ type, sessionId, timestamp: Date.now() });
}

export function getStats() {
  const now = Date.now();
  const min = 60 * 1000;
  const hour = 60 * min;
  const day = 24 * hour;
  const week = 7 * day;

  const inLast = (ms: number) => (e: StoredEvent) => e.timestamp >= now - ms;
  const downloadOnly = (e: StoredEvent) => e.type === "download_click";
  const pageviewOnly = (e: StoredEvent) => e.type === "pageview";

  const last5Min = events.filter(inLast(5 * min));
  const last1Min = events.filter(inLast(min));
  const last1Hour = events.filter(inLast(hour));
  const last24Hours = events.filter(inLast(day));
  const last7Days = events.filter(inLast(week));

  const uniqueSessions = (list: StoredEvent[]) => new Set(list.map((e) => e.sessionId)).size;

  return {
    liveVisitors: uniqueSessions(last5Min.filter(pageviewOnly)),
    downloadClicksTotal: events.filter(downloadOnly).length,
    downloadClicksLastMin: last1Min.filter(downloadOnly).length,
    downloadClicksLastHour: last1Hour.filter(downloadOnly).length,
    downloadClicksLastDay: last24Hours.filter(downloadOnly).length,
    downloadClicksLastWeek: last7Days.filter(downloadOnly).length,
    pageviewsLastMin: last1Min.filter(pageviewOnly).length,
    pageviewsLastHour: last1Hour.filter(pageviewOnly).length,
    pageviewsLastDay: last24Hours.filter(pageviewOnly).length,
    pageviewsLastWeek: last7Days.filter(pageviewOnly).length,
  };
}
