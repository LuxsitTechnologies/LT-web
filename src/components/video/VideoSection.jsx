import  { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Rewind, FastForward } from "lucide-react";
import { Button } from "./Button";
import { Slider } from "./Slider";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (value) => {
    if (videoRef.current) {
      const newTime = (value[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(value[0]);
    }
  };

  const handleVolumeChange = (value) => {
    if (videoRef.current) {
      videoRef.current.volume = value[0] / 100;
      setVolume(value[0]);
      setIsMuted(value[0] === 0);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const skip = (amount) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto pt-20">
       <h2 className="text-4xl font-bold mb-4 text-center text-white pb-8">In our clients words</h2>
      <div
        className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          onTimeUpdate={handleProgress}
          onClick={togglePlay}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Button
              size="icon"
              variant="ghost"
              className="w-20 h-20 text-white bg-primary/80 hover:bg-primary/90 rounded-full transition-transform transform hover:scale-110"
              onClick={togglePlay}
            >
              <Play className="w-10 h-10" />
            </Button>
          </div>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
        >
          <Slider value={[progress]} onValueChange={handleSeek} max={100} step={0.1} className="mb-4 w-[100%]" />
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost" onClick={() => skip(-10)}>
                <Rewind className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlay}
                className="bg-primary/80 hover:bg-primary/90 rounded-full"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>
              <Button size="icon" variant="ghost" onClick={() => skip(10)}>
                <FastForward className="w-5 h-5" />
              </Button>
              <span className="text-sm">
                {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button size="icon" variant="ghost" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
                <Slider value={[volume]} onValueChange={handleVolumeChange} max={100} step={1} className="w-24" />
              </div>
              <Button size="icon" variant="ghost">
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}