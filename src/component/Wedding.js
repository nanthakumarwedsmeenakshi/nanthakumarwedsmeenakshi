import React, { useEffect } from 'react';
import img1 from './asset/ad.png';
import img2 from './asset/devider-logo.png';
import adio from './asset/Remo.mp3';
import ReactPlayer from 'react-player';

function Wedding() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.messages');
    let currentIndex = 0;

    function showNextText() {
      if (currentIndex === 2) {
        textElements[currentIndex].classList.remove('active');
        clearInterval(myInterval);
        document.getElementById('blinkArea').style.display = 'none';
        document.getElementById('contentArea').style.display = 'block';
      } else {
        textElements[currentIndex].classList.remove('active');
        currentIndex = currentIndex + 1;
        textElements[currentIndex].classList.add('active');
      }
    }

    textElements[currentIndex].classList.add('active');

    const myInterval = setInterval(showNextText, 4000);

    var countDownDate = new Date('Sep 07, 2026').getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('timer').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'Today';
      }

    
    }, 1000);
    return () => {
        clearInterval(myInterval);
        clearInterval(x);
      };
  }, []);

  return (
    <div className="container">
      <div id="blinkArea">

        <ReactPlayer className="audio" width={0} height={0} url={adio} playing={true} />
        <p className="messages">We Invited</p>
        <p className="messages">You To Our</p>
        <p className="messages"> Wedding Ceremony </p>
      </div>
      <div id="contentArea">
        <p id="subTitle">
          Your Presence will be our greatest gift. We request the pleasure of your company at the wedding
        </p>
        <div className="imgArea">
          <img src={img1} alt="Design" />
        </div>
        <p className="textCenter colorBrown" id="gbText">
          NanthaKumar & Meenakshi
        </p>
        <div className="textCenter">
          <img src={img2} alt="Divider Logo" />
        </div>
        <p className="textCenter colorBrown">WE ARE GETTING MARRIED</p>
        <div className="countDownArea">
          <h2>Countdown to Wedding Ceremony</h2>
          <div id="defaultCountdown" className="hasCountdown">
            <span className="countdown_row" id="timer"></span>
          </div>
        </div>
        <div className="cardSection">
          <div className="cardcontain">
            <p className='colorBrown textCenter'>&#10084; Wedding &#10084;</p> 
            <a className='addCl' >
           07-Sep-2026 09:00 - 10:30 am
            </a>
          </div>
          {/* <div className="cardcontain">
            <p className='colorBrown textCenter'> &#10084; Reception &#10084;</p> 
            <a className='addCl' href="http://www.google.com/calendar/eventedit?action=TEMPLATE&text=Vishnu+Nivetha+Reception+Event&dates=20231122T133000Z/20231122T170000Z&details=Event%20Details%20Here&location=F%2C%20kalpana%20complex%2C%204%2F68%2C%20Mettupalayam%20Rd%2C%20Koundampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu">
            22-Nov-2023 @ 7:00 PM Onwards
            </a>
          </div> */}
          <div className='cardcontain'>
            <p className='colorBrown textCenter'>Location</p>
            <a className='addCl' href='https://maps.app.goo.gl/sCkpxmjKYHQorgJ28'>Okkalikar Kaappu Thirumana Mandapam,Thirupparankundram Madurai-625005</a>
          </div>
          <p className='
          colorBrown'>Let's Make Memories Together</p>
        </div>
    
      </div>
    </div>
  );
}

export default Wedding;
