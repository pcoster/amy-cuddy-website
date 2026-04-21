"use client";

import { useState } from "react";
import type { PressItem, VideoAppearance, PodcastAppearance } from "@/data/media";

interface MediaSectionProps {
  pressItems: PressItem[];
  videoAppearances: VideoAppearance[];
  podcastAppearances: PodcastAppearance[];
}

type Tab = "press" | "videos" | "podcasts";

export default function MediaSection({
  pressItems,
  videoAppearances,
  podcastAppearances,
}: MediaSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>("press");

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "press", label: "Press", count: pressItems.length },
    { id: "videos", label: "Video", count: videoAppearances.length },
    { id: "podcasts", label: "Podcasts", count: podcastAppearances.length },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-semibold tracking-wide transition-colors relative -mb-px ${
              activeTab === tab.id
                ? "text-navy border-b-2 border-navy"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 text-xs font-medium px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? "bg-navy/10 text-navy"
                  : "bg-gray-100 text-text-secondary"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Press */}
      {activeTab === "press" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-navy/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-background-alt rounded-lg flex items-center justify-center font-serif font-bold text-navy text-sm border border-gray-100">
                {item.publication.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-wide uppercase text-text-secondary mb-1">
                  {item.publication}
                </p>
                <p className="font-medium text-text-primary text-sm leading-snug group-hover:text-navy transition-colors">
                  {item.headline}
                </p>
                {item.date && (
                  <p className="text-xs text-text-secondary/60 mt-1.5">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                )}
              </div>
              <svg
                className="w-4 h-4 text-text-secondary/40 flex-shrink-0 mt-0.5 group-hover:text-navy transition-colors"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>
      )}

      {/* Videos */}
      {activeTab === "videos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoAppearances.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-navy/10 transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                {video.duration && (
                  <span className="absolute bottom-3 right-3 text-xs font-mono font-medium text-white bg-black/50 px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                )}
                <span className="absolute top-3 left-3 text-xs font-medium text-white/80 bg-black/30 px-2 py-0.5 rounded">
                  {video.platform}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-text-primary text-sm leading-snug mb-2 group-hover:text-navy transition-colors">
                  {video.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Podcasts */}
      {activeTab === "podcasts" && (
        <div className="space-y-4">
          {podcastAppearances.map((podcast) => (
            <a
              key={podcast.id}
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-navy/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-navy/20 to-navy/5 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-navy/60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-wide uppercase text-text-secondary mb-1">
                  {podcast.show}
                  {podcast.host && ` · with ${podcast.host}`}
                </p>
                <h3 className="font-medium text-text-primary text-sm leading-snug mb-1.5 group-hover:text-navy transition-colors">
                  {podcast.episode}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{podcast.description}</p>
                <div className="flex gap-4 mt-2">
                  {podcast.duration && (
                    <span className="text-xs text-text-secondary/60">{podcast.duration}</span>
                  )}
                  {podcast.date && (
                    <span className="text-xs text-text-secondary/60">
                      {new Date(podcast.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </span>
                  )}
                </div>
              </div>
              <svg
                className="w-4 h-4 text-text-secondary/40 flex-shrink-0 mt-0.5 group-hover:text-navy transition-colors"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
