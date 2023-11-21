import { useRef } from 'react';
import './App.css'
import { useEffect } from 'react';
import "./lib/sliderCaptcha";

function App() {
  const ref = useRef();
  const captcha = useRef();

  useEffect(() => {
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
  }, []);
  
  return (
    <>
      <div ref={ref}></div>
      <p>Slider captcha</p>
    </>
  )
}

export default App
