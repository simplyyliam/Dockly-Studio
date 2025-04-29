import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  url: string
  name: string
}

function CustomScreen({url, name}:Props) {
  const AppWrapperRef = useRef<HTMLDivElement | null>(null);

  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  useEffect(() => {
    const object = AppWrapperRef.current;
    if (!object) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      const currentX = gsap.getProperty(object, "x") as number;
      const currentY = gsap.getProperty(object, "y") as number;

      offset.current = {
        x: e.clientX - currentX,
        y: e.clientY - currentY,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const MouseX = e.clientX - offset.current.x;
      const MouseY = e.clientY - offset.current.y;

      gsap.to(object, {
        x: MouseX,
        y: MouseY,
        ease: "expo.out",
        duration: 0.2,
      });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    object.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      object.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        ref={AppWrapperRef}
        className="absolute"
        style={{ width: 900, height: 600 }}
      >
        <iframe
          src={url}
          width={900}
          height={600}
          style={{ pointerEvents: "none" }} // Optional: prevents iframe from intercepting mouse events
          name={name}
        />
      </div>
    </div>
  );
}

export default CustomScreen;
