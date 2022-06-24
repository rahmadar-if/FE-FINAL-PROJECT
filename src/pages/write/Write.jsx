import "./write.css";

export default function write() {
  return (
    <div className="write">
      <img src="https://cms-revamp.daihatsu.co.id/uploads/tipsandtrick/1605856631508.jpeg" className="writeImg mb-4" alt="" />
      <form className="writeForm">
          <div className="container-sm writeFormGroup row">
            <div class="input-group mb-3 small">
              <span class="input-group-text" id="inputGroup-sizing-default">Input Title</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group">
              <span class="input-group-text">Insert Desc</span>
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
              {/* <input
                type="text"
                placeholder="Input Title"
                className="writeInput"
                autoFocus={true}
                /> */}
              <div>
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <label htmlFor="fileInput">
                
                <button className="writeSubmit btn btn-outline-success btn-sm"><i class="bi bi-plus-lg"></i> Image</button>
                </label>
                
                <button className="writeSubmit btn btn-outline-success btn-sm">Publish</button>
              </div>
          </div>
          {/* <div className="writeFormGroup">
            <textarea
              placeholder="Tell Your Story..."
              type="text"
              className="writeInput writeText"
              ></textarea>
          </div> */}
      </form>
    </div>
  );
}
