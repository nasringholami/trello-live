
import './App.css';
import logo from "./assets/images/trello_logo.svg";
import hero from "./assets/images/png/hero.png";
import board from "./assets/images/png/board.png";
import google from "./assets/images/google_logo.svg";
import fender from "./assets/images/fender_logo.svg";
import squarespace from "./assets/images/squarespace_logo.svg";
import costco from"./assets/images/costco_logo.svg";
import fluidimg from "./assets/images/view.svg";
import cardBack from "./assets/images/card-back.svg";
import automation from "./assets/images/png/automation.png";
import power from "./assets/images/png/power-ups.png";
import tag from"./assets/images/tag.svg";
import compass from"./assets/images/compass.svg";
import ebay from "./assets/images/ebay.svg";
import appStore from "./assets/images/app_store.svg";
import googlePlay from"./assets/images/google_play.svg";
function App() {
  return (
    <main className="container">
      <header className="header">
        <nav className="navbar">
          <img src={logo} alt="trello logo" className="trello_logo" />
          <div className="nav_buttons">
            <a href="/login" className="login_button">
              Log in
            </a>
            <a href="/signup" className="signup_button">
              Sign up
            </a>
          </div>
        </nav>
      </header>
      <section className="hero_box">
        <div className="title_container">
          <h1 className="hero_box_title">Trello helps teams move work forward.</h1>
          <h3 className="hero_box_description">
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </h3>
          <div className="hero_box_signup_button_container">
            <div className="hero_box_email_input">
              <input placeholder="Email" className="email_input" />
            </div>
            <button className="hero_box_signup_button">
              Sign up—it&apos;s free!
            </button>
          </div>
        </div>
        <img src={hero} alt="trello logo" className="hero_image" />
      </section>
      <section className="product" >
          <div className="container_product">
            <div className="header_para_product">
              <h2> It’s more than work. It’s a way of working together.</h2>
              <p>Start with a Trello board, lists, and cards. Customize and expand with more features as your<br />
                 teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.
             </p>
             <p>
               <a href="#" className="btn_start_doing_product"> Start doing &#8594; </a>
             </p>
            </div>
            <div className="main_container_product">
              <img src={board} alt="boardpng" className="img_board_product"/>
            </div>
            <div className="footer_product">
              <p className="footer_product_p">
                Join over 1,000,000 teams worldwide that are using Trello to get more done.
              </p>
              <div className="footer_product_div">
              <img src={google} alt="google_svg" className="google_logo" />
              <img src={fender} alt="fender_svg" className="fender_logo" />
              <img src={squarespace} alt="squarespace_svg" className="squarespace_logo" />
              <img src={costco} alt="costoco_svg" className="costco_logo" />
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features_row1_div">
            <div className="features_row1_col1">
              <h2 style={{ width: "540px" , height:"100px",fontSize:"33px",fontFamily: "sans-serif" }}>
              Features to help your team <br/>succeed
              </h2>
              <p style={{ width:"540px" , height:"150px",fontSize:"20px" ,fontFamily: "sans-serif",lineHeight: "1.5"}}>
              Powering a productive team means using a powerful<br/>
               tool (and plenty of snacks). From meetings and projects<br/>
               to events and goal setting, Trello’s intuitive features give<br/>
               any team the ability to quickly set up and customize<br/>
              workflows for just about anything.
              </p>
            </div>
          </div>
          <div className="features_row2_div">
            <div className="features_row2_col1">
              <img src={fluidimg} alt=" fluidview" className="features_fluid_img"></img>
            </div>
            <div className="features_row2_col2">
              <h5>CHOOSE A VIEW</h5>
              <h2>The board is just the beginning</h2>
              <p>
              Lists and cards are the building blocks of organizing work on a<br/>
               Trello board. Grow from there with task assignments, timelines,<br/>
                productivity metrics, calendars, and more.
              </p>
              <a href="#"> &#10010; Learn more</a>
            </div>
          </div>
          <div className="features_row3_div">
            <div className="features_row3_col1">
              <h5>DIVE INTO THE DETAILS</h5>
              <h2>Cards contain everything you need</h2>
              <p>
              Trello cards are your portal to more organized work—where every<br/>
               single part of your task can be managed, tracked, and shared with<br/>
               teammates. Open any card to uncover an ecosystem of checklists,<br/>
               due dates, attachments, conversations, and more.
              </p>
              <h3>
              <a href="#"> &#10010; Learn more</a>
              </h3>
            </div>
            <div className="features_row3_col2">
            <img src={cardBack} alt="cardBack.svg" className="features_cardBack_svg" />
            </div>
          </div>
          <div className="features_row4_div">
            <div className="features_row4_col1">
            <img src={automation} alt="automation.png" className="features_automation-png" /> 
            </div>
            <div className="features_row4_col2">
              <h5>MEET YOUR NEW BUTLER</h5>
              <h2>No-code automation</h2>
              <p>                
                Let the robots do the work—so your team can focus on work that<br/>
                matters. With Trello’s built-in automation, Butler, reduce the<br/>
                number of tedious tasks (and clicks) on your project board by<br/>
                harnessing the power of automation across your entire team.
              </p>
              <a></a>
            </div>
          </div>
          <div className="features_row5_div">
            <div className="features_row5_col1">
              <h5>POWER-UPS</h5>
              <h2>Integrate top work tools</h2>
              <p>
              Easily connect the apps your team already uses into your Trello<br/>
               workflow, or add a Power-Up that helps fine-tune one specific<br/>
                need. With hundreds of Power-Ups available, your team’s workflow<br/>
                wishes are covered.
              </p>
              <a href="#">&#10010; Learn more</a>
            </div>
            <div className="features_row5_col2">
            <img src={power} alt="power.png" className="features_power-png" />
            </div>
          </div>
        </section>
        <div className="order_container">
          <div className="order_col1">
          <img src={tag} alt="tag.svg" className="order_tag_svg" />
          </div>
          <div className="order_col2">
            <h3>See our pricing</h3>
            <p>
             Whether you’re a team of 2 or 2,000,<br/>
             there’s a Trello tailor-made for your<br/>
              organization.
            </p>
            <a href="#">Trello Pricing</a>
          </div>
          <div className="order_col3">
          <img src={compass} alt="compass.svg" className="order_compass_svg" />
          </div>
          <div className="order_col4">
            <h3>
              Take a Trello tour
            </h3>
            <p>
             Explore the world of boards and beyond<br/>
             in Trello. Dive deeper into our most<br/>
              popular features.
            </p>
            <a href="#">Tour Trello</a>
          </div>
        </div>
        <div className="carousel">
          <div className="carousel_row1">
            <div className="carousel_row1_col1">
              <div className="carousel_ebay_div">
               <img src={ebay} alt="ebay.svg" className="carousel_ebay_svg" />
              </div>
              <h5>INDUSTRY</h5>
              <h3>eCommerce</h3>
            </div>
            <div className="carousel_row1_col2">
              <blockquote className="carousel_row1_col2_quote">
              <span style={{fontSize:"80px"}}>&#10077;</span>
                Everyone loves it; it has democratized our finance<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function. In some ways Trello shattered hierarchy<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and brought us together.
              </blockquote>
              <footer className="carousel_row1_col2_footer">
                <span className="carousel_row1_col2_span2">
               <h5 style={{width:"136px",heigh:"20px",fontFamily:"sans-serif"}}> BHARATH SUNDAR</h5>
                Finance, eBay
                </span>
              </footer>
            </div>
          </div>
          <div  className="carousel_row2">
            {/* <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
          </div>
        </div>
        <section className="sign_up_container">
          <div className="sign_up">
            <div className="sign_up_text">
              <h3>
                Sign up and get started with Trello today. A world of productive<br/>
                teamwork awaits!
              </h3>
              <div className="btn_signup_email">
                <input  placeholder="Email" type="email"></input>
                <button  type="submit" className="btn_signup_container">Sign Up </button>
              </div>
            </div>
          </div>
        </section>
        <div className="last_container">
          <p>Trello also works great on your smaller screen.</p>
          <div >
           <img src={appStore} alt="App Store.svg" className="app_store_svg" />
           <img src={googlePlay} alt="Google Play.svg" className="google_play_svg" />
          </div>
        </div>
        <footer className="global_footer">
          
        </footer>
    </main>

  );
}

export default App;
