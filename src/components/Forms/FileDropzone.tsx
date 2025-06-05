// FileDropzone.tsx
import { useRef, useState } from "react";
import './FileDropzone.css'

type FileDropzoneProps = {
  onFileSelect: (file: File) => void;
};

export default function FileDropzone({ onFileSelect }: FileDropzoneProps) {
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div
      className={`dropzone ${dragging ? "dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden-input"
        onChange={handleFileChange}
      />
      <p>{fileName || "Arraste ou selecione um comprovante (opcional)"}</p>
    </div>
  );
}
