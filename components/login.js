class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	static getInitialProps() {
	}

	onSubmit(e) {
		e.preventDefault()
		console.log(e)
		console.info(this.state)
	}

	onChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	render() {
		return (
			<div>
				<form method="POST" onSubmit={this.onSubmit}>
					<div className="group">      
				      <input type="text" name="email" required onChange={this.onChange} value={this.state.email} />
				      <span className="highlight"></span>
				      <span className="bar"></span>
				      <label>Email</label>
				    </div>
				    <div className="group">      
				      <input type="password" name="password" required onChange={this.onChange} value={this.state.password} />
				      <span className="highlight"></span>
				      <span className="bar"></span>
				      <label>Password</label>
				    </div>
				    <div>
				    	<button type="submit" className="btn-login">Enviar</button>
				    </div>
				</form>

				<style jsx>{`
					/* form starting stylings ------------------------------- */
					.group { 
					  position:relative;
					  margin-bottom:45px;
					}
					input {
					  font-size:18px;
					  padding:5px 5px 5px 5px;
					  display:block;
					  width:200px;
					  border:none;
					  border-bottom:1px solid #757575;
					}
					input:focus { outline:none; }

					/* LABEL ======================================= */
					label {
					  color:#999; 
					  font-size:18px;
					  font-weight:normal;
					  position:absolute;
					  pointer-events:none;
					  left:5px;
					  top:10px;
					  transition:0.2s ease all; 
					  -moz-transition:0.2s ease all; 
					  -webkit-transition:0.2s ease all;
					}

					/* active state */
					input:focus ~ label, input:valid ~ label {
					  top:-20px;
					  font-size:14px;
					  color:#5264AE;
					}

					/* BOTTOM BARS ================================= */
					.bar  { position:relative; display:block; width:200px; }
					.bar:before, .bar:after   {
					  content:'';
					  height:2px; 
					  width:0;
					  bottom:1px; 
					  position:absolute;
					  background:#5264AE; 
					  transition:0.2s ease all; 
					  -moz-transition:0.2s ease all; 
					  -webkit-transition:0.2s ease all;
					}
					.bar:before {
					  left:50%;
					}
					.bar:after {
					  right:50%; 
					}

					/* active state */
					input:focus ~ .bar:before, input:focus ~ .bar:after {
					  width:50%;
					}

					/* HIGHLIGHTER ================================== */
					.highlight {
					  position:absolute;
					  height:60%; 
					  width:200px; 
					  top:25%; 
					  left:0;
					  pointer-events:none;
					  opacity:0.5;
					}

					/* active state */
					input:focus ~ .highlight {
					  -webkit-animation:inputHighlighter 0.3s ease;
					  -moz-animation:inputHighlighter 0.3s ease;
					  animation:inputHighlighter 0.3s ease;
					}

					/* ANIMATIONS ================ */
					@-webkit-keyframes inputHighlighter {
					  from { background:#5264AE; }
					  to  { width:0; background:transparent; }
					}
					@-moz-keyframes inputHighlighter {
					  from { background:#5264AE; }
					  to  { width:0; background:transparent; }
					}
					@keyframes inputHighlighter {
					  from { background:#5264AE; }
					  to  { width:0; background:transparent; }
					}

					/*  Form styles  */
					form {
						padding: 90px;
						.group {
							label {
								font-size: 12px;
							}
						}
						.btn-login {
							padding: 5px;
						}
					}
				`}</style>
			</div>
		)
	}
}

export default Login;