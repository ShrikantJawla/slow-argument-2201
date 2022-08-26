function Awareness() {
  return `<div id="box1">
    <h3>Attract and recruit talented people to your organization</h3>
    <div class="textbox1">
      <h4>Better target potential candidates</h4>
      <p>
      Use surveys at recruiting <a href="#">events</a> to learn about candidates and secure more than just contact info.
      </p>
    </div>
    <div class="textbox1">
      <h4>Stay competitive with a strong employer brand</h4>
      <p>
      Test your messaging and see if talented candidates are aware of your mission, values, and perks.
      </p>
    </div>
    <div class="textbox1">
      <h4>Enhance the recruiting experience for candidates</h4>
      <p>
      Get feedback on your recruiting experience to identify what’s working well and what to improve.
      </p>
    </div>
    <div class="textbox2">
      —
      <h5>Not sure if your recruiting process works?</h5>
      <p>
        <a href="#">Create a survey</a> today to ask hiring managers for feedback on procedures, scheduling, and more.
      </p>
    </div>
  </div>
  <div id="box2"">
    <div id="box2text">
      <p>
      65% of millennials we talked to would rather work for a company whose mission they believe in than a company that pays a lot
      </p>
    </div>
    <div id="box2img">
      <img
        src="https://prod.smassets.net/assets/cms/sm/uploads//mp-employeefeedback-slide1-2x.png"
        alt=""
      />
    </div>
  </div>`;
}
function Purchase() {
  return `<div id="box1">
  <h3>Get all your new hires up to speed faster</h3>
  <div class="textbox1">
    <h4>Reinforce your onboarding programs</h4>
    <p>
    Our platform includes <a href="#">quizzes</a> to ensure employees understand company values, protocols, and more.
    </p>
  </div>
  <div class="textbox1">
    <h4>Create better onboarding experiences</h4>
    <p>
      Inform your onboarding strategies and see where and how to improve with feedback from new hires.
    </p>
  </div>
  <div class="textbox1">
    <h4>Give ongoing support to new employees</h4>
    <p>
      Check in early and often with surveys. Easily identify if a new hire is struggling or needs additional help.
    </p>
  </div>
  <div class="textbox2">
    —
    <h5>Do your hiring managers want more resources or info?</h5>
    <p>
      <a href="#">Send a survey</a> to managers and ask if they have what they need to successfully onboard new hires.
    </p>
  </div>
</div>
<div id="box2" style="background-color: rgb(249, 190, 0)">
  <div id="box2text">
    <p style="color: #1e2124">
      “The faster new hires feel welcome and prepared for their jobs, the faster they will be able to successfully contribute to the firm’s mission”
    </p style="color: #1e2124">
    <p>
      <p>—Talya N. Bauer, Ph.D</p>
      Source: <a href="#" class="colorwhite">SHRM foundation</a>
    </p>
  </div>
  <div id="box2img">
    <img
      src="https://prod.smassets.net/assets/cms/sm/uploads//mp-employeefeedback-slide2-2x.png"
      alt=""
    />
  </div>
</div>`;
}
function Retention() {
  return `<div id="box1">
  <h3>Turn more of your employees into star performers</h3>
  <div class="textbox1">
    <h4>Give every employee comprehensive feedback</h4>
    <p>
      Create a <a href="#">360 review</a>process to provide employees with positive and constructive input.
    </p>
  </div>
  <div class="textbox1">
    <h4>Create better learning and development programs</h4>
    <p>
      Measure the effectiveness of existing programs and get feedback before investing in new ones.
    </p>
  </div>
  <div class="textbox1">
    <h4>Measure and track progress of teams and more</h4>
    <p>
      Identify which teams are working well and which ones need additional resources, training, and more.
    </p>
  </div>
  <div class="textbox2">
    —
    <h5>Want to get candid feedback?</h5>
    <p>
      Let your survey-takers know that you’re <a href="#"> collecting responses </a> anonymously.    </p>
  </div>
</div>
<div id="box2" style="background-color: rgb(249, 190, 0)">
  <div id="box2text">
    <p>
      Help your employees grow. Did you know 76% of people say they want a promotion within the first 2 years at a job?</p>
  </div>
  <div id="box2img">
    <img
      src="https://prod.smassets.net/assets/cms/sm/uploads//mp-employeefeedback-slide3-2x.png"
      alt=""
    />
  </div>
</div>`;
}
function Loyalty() {
  return `<div id="box1">
      <h3>Raise engagement for happier, more productive employees</h3>
      <div class="textbox1">
        <h4>Measure engagement for every employee</h4>
        <p>
        Get <a href="#">employee feedback</a> on <a href="#">job satisfaction</a>, work-life balance, team dynamics, and more.
        </p>
      </div>
      <div class="textbox1">
        <h4>Keep your organization aligned</h4>
        <p>
        Ensure all employees, teams, and departments are working strategically towards the same purpose.
        </p>
      </div>
      <div class="textbox1">
        <h4>Improve retention rates with exit surveys</h4>
        <p>
        Find out why people are leaving your organization and identify any trouble spots with <a href="#">exit surveys</a>.
        </p>
      </div>
      <div class="textbox2">
        —
        <h5>Want a holistic understanding of engagement?</h5>
        <p>
        Our comprehensive solution, <a href="#">Engage</a>, is based on a unique methodology that focuses on the whole person.
        </p>
      </div>
    </div>
    <div id="box2" style="background-color: rgb(173, 207, 235)">
            <div id="box2text">
              <p style="color: #1e2124">
              At any given time, 41% of employees <strong>would take a job at another company</strong> if offered one
              </p >
              <p style="color: #1e2124">—Simon Lindsay, CEO of Progressive Direct</p>
            </div>
            <div id="box2img">
              <img
                src="https://prod.smassets.net/assets/cms/sm/uploads//mp-employeefeedback-slide4-2x.png"
                alt=""
              />
            </div>
      </div>`;
}
let container3box = document.getElementById("container3box");
container3box.innerHTML = Awareness();
let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", function () {
  btnlick(btn[0].id);
});
btn[1].addEventListener("click", function () {
  btnlick(btn[1].id);
});
btn[2].addEventListener("click", function () {
  btnlick(btn[2].id);
});
btn[3].addEventListener("click", function () {
  btnlick(btn[3].id);
});
function btnlick(id) {
  container3box.innerHTML = "";
  document.querySelector(`.btn>span`).classList.remove("dbtn");
  if (id == "btn1") {
    container3box.innerHTML = Awareness();
  } else if (id == "btn2") {
    container3box.innerHTML = Purchase();
  } else if (id == "btn3") {
    container3box.innerHTML = Retention();
  } else if (id == "btn4") {
    container3box.innerHTML = Loyalty();
  } else container3box.innerHTML = Awareness();
}
