import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, Rewind, FastForward } from "lucide-react";
import { Button } from "../video/Button";
import { Slider } from "../video/slider";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
      };
      
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, []);

  // Effect to handle auto-play on hover
  useEffect(() => {
    if (videoRef.current) {
      if (isHovering && !isPlaying) {
        videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
        setIsPlaying(true);
      } else if (!isHovering && isPlaying && !showControls) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isHovering, isPlaying, showControls]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log('Play prevented:', err));
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

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowControls(false);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (!playerRef.current?.matches(':hover')) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Animation variants
  const controlsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const bigPlayButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-20">
      <motion.h2 
        className="text-4xl font-bold mb-4 text-center text-white pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        In our clients words
      </motion.h2>
      
      <motion.div
        ref={playerRef}
        className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          onTimeUpdate={handleProgress}
          onClick={togglePlay}
          playsInline
        />
        
        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
              variants={bigPlayButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={bigPlayButtonVariants}
                whileHover="hover"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-20 h-20 text-white bg-primary/80 hover:bg-primary/90 rounded-full transition-transform"
                  onClick={togglePlay}
                >
                  <Play className="w-10 h-10" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4"
              variants={controlsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Slider 
                value={[progress]} 
                onValueChange={handleSeek} 
                max={100} 
                step={0.1} 
                className="mb-4 w-full" 
              />
              
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="icon" variant="ghost" onClick={() => skip(-10)}>
                      <Rewind className="w-5 h-5" />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={togglePlay}
                      className="bg-primary/80 hover:bg-primary/90 rounded-full"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="icon" variant="ghost" onClick={() => skip(10)}>
                      <FastForward className="w-5 h-5" />
                    </Button>
                  </motion.div>
                  
                  <motion.span 
                    className="text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                  </motion.span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <motion.div className="flex items-center space-x-2">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="icon" variant="ghost" onClick={toggleMute}>
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                    </motion.div>
                    <Slider value={[volume]} onValueChange={handleVolumeChange} max={100} step={1} className="w-24" />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="icon" variant="ghost">
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}