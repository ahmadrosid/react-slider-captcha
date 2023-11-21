import { useRef, useState } from 'react';
import './App.css'
import "./lib/sliderCaptcha";

function App() {
  const ref = useRef();
  const captcha = useRef();
  const [keyRender, resetKeyRender] = useState(0);

  const toggleCatpcha = () => {
    if (captcha.current) {
      captcha.current = null;
      resetKeyRender(prev => prev+1);
      return;
    }

    if (ref.current && !captcha.current) {
      captcha.current = window.sliderCaptcha(
        {
            element: ref.current,
            loadingText: 'Loading...',
            failedText: 'Try again',
            barText: 'Slide right to fill',
            repeatIcon: 'fa fa-redo',
            onSuccess: function () {
                setTimeout(function () {
                    alert('Your captcha is successfully verified.');
                    captcha.current.reset();
                }, 1000);
            },
        })
    }
  }

  return (
    <>
      <div key={keyRender} ref={ref}></div>
      <div className='card'>
        <button onClick={toggleCatpcha}>Toggle Captcha</button>
      </div>
    </>
  )
}

export default App
