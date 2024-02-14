import React, { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const defaultValues = {
    first: false,
    second: false,
    third: false,
  };
  const [lines, setLines] = useState(defaultValues);

  const handlePrediction = () => {
    setIsTerminalVisible(false);
    setLines(defaultValues);
    setIsLoading(true);

    setTimeout(() => {
      setIsTerminalVisible(true);
      setLines((prev) => ({ ...prev, first: true }));
      setIsLoading(false);
    }, 2000);

    setTimeout(() => {
      setLines((prev) => ({ ...prev, second: true }));
    }, 4000);

    setTimeout(() => {
      setLines((prev) => ({ ...prev, third: true }));
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
          <div className="flex flex-col text-center justify-center gap-12 p-4 border-t">
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
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs mr-2"
                />
                <button onClick={handlePrediction} className="btn btn-primary">
                  Predict
                </button>
              </div>
            </div>
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
                {lines.third && (
                  <pre data-prefix="3" className="bg-primary text-warning-content">
                    <code>Prediction is --&gt; Rice</code>
                  </pre>
                )}
                {isError && (
                  <pre data-prefix="*" className="bg-warning text-warning-content">
                    <code>Error!</code>
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
