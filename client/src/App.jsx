
function App() {

  return (
    <>
      <div className="mockup-browser border border-base-300 w-3/4 mx-auto min-h-screen">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">{window.location.origin}</div>
        </div>
        <div className="flex flex-col text-center justify-center gap-24 p-4 border-t">
        <img className="w-11/12 h-96 object-cover mx-auto" src="https://rare-gallery.com/uploads/posts/1024964-landscape-anime-nature-field-farm-Non-Non-Biyori-plateau-grassland-pasture-terrace-agriculture-meadow-plantation-plain-prairie-rural-area-geographical-feature-ecosystem.png" alt="bg-image" />
        <h1 className="text-5xl font-bold">Optimizing Agriculture Production</h1>
        </div>
      </div>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <input type="file" className="file-input file-input-bordered w-full max-w-xs mr-2" />
        <button className="btn btn-primary">Predict</button>
        <br />
        <progress className="progress w-56"></progress>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
