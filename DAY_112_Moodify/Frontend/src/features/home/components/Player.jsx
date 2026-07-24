import { useEffect, useMemo, useRef, useState } from "react"
import { useSong } from "../hooks/useSong"
import "./player.scss"

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2]

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00"
  }

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

const Player = () => {
  const { song } = useSong()
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [volume, setVolume] = useState(0.8)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return undefined
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0)
      setCurrentTime(audio.currentTime || 0)
    }

    const handleEnded = () => {
      setCurrentTime(audio.duration || 0)
      setIsPlaying(false)
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [song?.url])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return undefined
    }

    if (!isPlaying) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrentTime(audio.currentTime || 0)
    }, 250)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [song?.url, isPlaying])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.playbackRate = playbackRate
  }, [playbackRate])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.pause()
    audio.currentTime = 0
    setCurrentTime(0)
    setDuration(0)
    setIsPlaying(false)
  }, [song?.url])

  const progress = useMemo(() => {
    if (!duration) {
      return 0
    }

    return Math.min((currentTime / duration) * 100, 100)
  }, [currentTime, duration])

  const remainingTime = useMemo(() => {
    if (!duration) {
      return 0
    }

    return Math.max(0, duration - currentTime)
  }, [currentTime, duration])

  if (!song)
    return null;

  const togglePlayPause = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      await audio.play()
      setIsPlaying(true)
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  const seekTo = (nextTime) => {
    const audio = audioRef.current

    if (!audio || !Number.isFinite(duration)) {
      return
    }

    const clampedTime = Math.max(0, Math.min(nextTime, duration || 0))
    audio.currentTime = clampedTime
    setCurrentTime(clampedTime)
  }

  const handleProgressChange = (event) => {
    seekTo((Number(event.target.value) / 100) * duration)
  }

  const handleSkip = (delta) => {
    seekTo(currentTime + delta)
  }

  const adjustVolume = (delta) => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextVolume = Math.min(1, Math.max(0, volume + delta))
    audio.volume = nextVolume
    setVolume(nextVolume)
  }

  return (
    <section className="player">
      <audio ref={audioRef} src={song.url || ""} preload="metadata"/>

      <div className="player__layout">
        <div className="player__artwork">
          <img
            className="player__poster"
            src={song?.posterUrl || ""}
            alt={song?.title || "Track poster"}
          />
        </div>

        <div className="player__content">
          <div className="player__header">
            <div className="player__meta">
              <p className="player__eyebrow">Now Playing</p>
              <h1 className="player__title">{song?.title?.trim() || "Unknown track"}</h1>
            </div>
            <p className="player__mood">{song?.mood || "neutral"}</p>
          </div>

          <div className="player__progressBlock">
            <div className="player__progressRow">
              <span className="player__time">-{formatTime(remainingTime)}</span>
              <input
                className="player__progress"
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleProgressChange}
              />
              <span className="player__time">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="player__controls">
            <button
              type="button"
              onClick={() => handleSkip(-5)}
              className="player__button"
              aria-label="Skip backward 5 seconds"
            >
              -5s
            </button>
            <button
              type="button"
              onClick={togglePlayPause}
              className="player__button player__button--primary"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button
              type="button"
              onClick={() => handleSkip(5)}
              className="player__button"
              aria-label="Skip forward 5 seconds"
            >
              +5s
            </button>
            <button
              type="button"
              onClick={() => adjustVolume(-0.1)}
              className="player__button player__button--volume"
              aria-label="Decrease volume"
            >
              Vol -
            </button>
            <button
              type="button"
              onClick={() => adjustVolume(0.1)}
              className="player__button player__button--volume"
              aria-label="Increase volume"
            >
              Vol +
            </button>

            <label className="player__speedControl">
              Speed
              <select
                className="player__select"
                value={playbackRate}
                onChange={(event) => setPlaybackRate(Number(event.target.value))}
              >
                {SPEED_OPTIONS.map((speed) => (
                  <option key={speed} value={speed}>
                    {speed}x
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="player__statusRow">
            <span>{isPlaying ? "Playing" : "Paused"}</span>
            <span>{Math.round(volume * 100)}% vol</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
)

export default Player