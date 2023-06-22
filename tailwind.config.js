/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        wiggle:{
          '0%, 100%': {transform: 'rotate(-8deg)'},
          '50%': {transform: 'rotate(8deg) translateY(50px)'},
        },
        'wiggleKobo':{
          '0%, 100%': {transform: 'rotate(-8deg)'},
          '25%, 75%': {transform: 'rotate(8deg) translateY(50px)'},
          '50%': {transform: 'rotate(-8deg) translateY(-40px)'},
        },
        'masuk-ke-kiri':{
          '0%': {transform: 'translateX(100px)', opacity: '0%'},
          '100%': {transform: 'translateX(0px)', opacity: '100%'}
        },
        'masuk-ke-kanan':{
          '0%': {transform: 'translateX(-100px)', opacity: '0%'},
          '100%': {transform: 'translateX(0px)', opacity: '100%'}
        },
        'masuk-ke-bawah':{
          '0%': {transform: 'translateY(-50px)', opacity: '0%'},
          '100%': {transform: 'translateY(0px)', opacity: '100%'}
        },
        'masuk-ke-atas':{
          '0%': {transform: 'translateY(50px)', opacity: '0%'},
          '100%': {transform: 'translateY(0px)', opacity: '100%'}
        },
        'masuk-ke-atas-noOpacity':{
          '0%': {transform: 'translateY(50px)', opacity: '100%'},
          '100%': {transform: 'translateY(0px)', opacity: '100%'}
        },
        'bubble':{
          '0%, 100%': {transform: 'translateY(0px)'},
          '25%, 75%': {transform: 'translateY(15px) rotate(-1deg)'},
          '50%': {transform: 'translateY(-15px) rotate(1deg)'},
        },
        'bubbleR':{
          '0%, 100%': {transform: 'translateY(0px)'},
          '25%, 75%': {transform: 'translateY(-15px) rotate(1deg)'},
          '50%': {transform: 'translateY(15px) rotate(-1deg)'},
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease infinite',
        wiggleKobo: 'wiggleKobo 3s ease infinite',
        slideLeft: 'masuk-ke-kiri 1s ease',
        slideRight: 'masuk-ke-kanan 1s ease',
        slideDown: 'masuk-ke-bawah 1s ease',
        slideUp: 'masuk-ke-atas 1s ease',
        slideLeftSlow: 'masuk-ke-kiri 1.5s ease',
        slideRightSlow: 'masuk-ke-kanan 1.5s ease',
        slideDownFast: 'masuk-ke-bawah 0.5s ease',
        slideUpFast: 'masuk-ke-atas 0.5s ease',
        slideRightFast: 'masuk-ke-kanan 0.5s ease',
        slideUpNoOpacity: 'masuk-ke-atas-noOpacity 1s ease',
        bubble: 'bubble 5s ease-in-out infinite',
        bubbleR: 'bubbleR 5s ease-in-out infinite',
        bubbleFast: 'bubble 1.5s ease-in-out infinite'

      },
      fontFamily: {
        'cabin': ["'Cabin'", 'sans-serif'],
        'sigmar': ["'Sigmar'", 'cursive'],
        'titan': ["'Titan One'", 'cursive'],
        'lato': ["'Lato'", 'sans-serif'],
        'poppins': ["'Poppins'", 'sans-serif'],
        'montserrat': ["'Montserrat'", 'sans-serif'],
        'patrickHand': ["'Patrick Hand'", 'cursive']
      },
      cursor: {
        'payung': 'url("../assets/payung-kobo.cur"), pointer',
      },
      colors:{
        mantraHujan: '#FE4557',
        youtube: '#FF0000',
        twitter: '#1DA1F2',
        hololive: '#27C7FF',
        hololiveLogo1: '#77E7EF',
        hololiveLogo2: '#5FDDEF',
        hololiveLogo3: '#DFFAFF',
        hololiveLogo4: '#27C7FF',
        hololiveLogo5: '#4F9FEF',
      }
    },
  },
  plugins: [],
}

