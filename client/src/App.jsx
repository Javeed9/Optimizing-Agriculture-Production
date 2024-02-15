import { useState, useRef } from "react";
import { predictHandler } from "./predictHandler";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const [prediction, setPrediction] = useState("nonPredictable");
  const defaultValues = {
    first: false,
    second: false,
    third: false,
  };
  const [lines, setLines] = useState(defaultValues);
  
  const fileInputRef = useRef(null);

  const handlePrediction = async () => {
    try {
        setIsLoading(true);
        setIsError(null);
        setLines(defaultValues);
        const file = fileInputRef.current.files[0];
        if (!file) {
            throw new Error('No file selected.');
        }
        const result = await predictHandler(fileInputRef.current.files[0]);
        setPrediction(result);
    } catch (error) {
        console.error('Error during prediction:', error);
        setIsError('Error during prediction: ' + error.message);
    } finally {
        setIsLoading(false);
    }

    setTimeout(() => {
        setIsTerminalVisible(true);
        setLines(prev => ({ ...prev, first: true }));
    }, 2000);

    setTimeout(() => {
        setLines(prev => ({ ...prev, second: true }));
    }, 4000);

    setTimeout(() => {
        setLines(prev => ({ ...prev, third: true }));
    }, 6000);
  };


  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="mockup-browser w-3/4 h-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border border-gray-100">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300">
              {window.location.origin}
            </div>
          </div>
          <div className="flex flex-col text-center justify-center gap-8 p-4 border-t">
            <img
              className="w-11/12 h-56 object-cover mx-auto"
              src="https://rare-gallery.com/uploads/posts/1024964-landscape-anime-nature-field-farm-Non-Non-Biyori-plateau-grassland-pasture-terrace-agriculture-meadow-plantation-plain-prairie-rural-area-geographical-feature-ecosystem.png"
              alt="bg-image"
            />
            <h1 className="text-5xl font-bold">
              Optimizing Agriculture Production
            </h1>
            <div className="hero-content text-center">
              <div className="max-w-md">
                {/* Use ref to assign the file input element */}
                <input
                  type="file"
                  id="fileInput"
                  className="file-input file-input-bordered w-full max-w-xs mr-2"
                  ref={fileInputRef}
                />
                <button onClick={handlePrediction} className="btn btn-primary hover:-translate-y-1 transition">
                  Predict
                </button>
              </div>
            </div>
              <p className="relative w-fit -top-8 text-gray-800 p-2 rounded-lg bg-white mx-auto">*Upload only csv files</p>
            {isLoading && <progress className="progress w-56 mx-auto"></progress>}
            {isTerminalVisible && (
              <div className="mockup-code w-1/2 mx-auto">
                <p className="relative -top-8">
                  <b>Terminal</b>
                </p>
                {lines.first && (
                  <pre data-prefix="1">
                    <code>bun run app</code>
                  </pre>
                )}
                {lines.second && (
                  <pre data-prefix="2">
                    <code>running...</code>
                  </pre>
                )}
                {(lines.third && !isError) && (
                  <pre data-prefix="3" className="bg-primary text-warning-content">
                    <code>Prediction is -&gt; <span className="font-bold">{prediction}</span></code>
                  </pre>
                )}
                {isError && (
                  <pre data-prefix="*" className="bg-warning text-warning-content">
                    <code>{isError}</code>
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
