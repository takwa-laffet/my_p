import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <div class="d-flex justify-content-center h-100">
      <div class="card">
      <div class="card-header">
      <h3>Sign In</h3>
      </div>
      <div class="card-body">
      <form>
      <div class="input-group form-group">
						<div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div> 
              <input type="text" class="form-control" placeholder="username"></input>
              </div>
      </form>
			</div>
      </div>
        </div>
        </header>    </div>
  );
}

export default App;
