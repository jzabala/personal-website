import React from 'react'
import PropTypes from 'prop-types'

function Logo({ className }) {
  return (
    <svg
      className={`logo ${className}`}
      width="152"
      height="24"
      viewBox="0 0 152 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.7334 23.838C2.42661 23.838 1.38748 23.6176 0.615997 23.1768L1.7496 19.9885C2.15896 20.2404 2.62342 20.3664 3.14299 20.3664C3.55234 20.3664 3.8751 20.2247 4.11127 19.9413C4.34744 19.6579 4.46552 19.2407 4.46552 18.6896V6.24358H8.9527V18.7132C8.9527 20.2877 8.48823 21.5315 7.55931 22.4447C6.64613 23.3736 5.37083 23.838 3.7334 23.838ZM6.70911 4.82658C5.8904 4.82658 5.22913 4.59828 4.7253 4.14169C4.22148 3.6851 3.96957 3.1183 3.96957 2.44129C3.96957 1.76428 4.22148 1.19747 4.7253 0.740884C5.22913 0.284295 5.8904 0.0559998 6.70911 0.0559998C7.52782 0.0559998 8.18909 0.276423 8.69291 0.717268C9.19673 1.14237 9.44865 1.69343 9.44865 2.37044C9.44865 3.07894 9.19673 3.66936 8.69291 4.14169C8.18909 4.59828 7.52782 4.82658 6.70911 4.82658Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M22.9884 15.6903V19.0439H11.18V16.3988L17.1078 9.57354H11.3454V6.24358H22.7522V8.86504L16.8244 15.6903H22.9884Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M30.4197 6.03103C32.5452 6.03103 34.1669 6.51911 35.2848 7.49527C36.4026 8.45568 36.9616 9.93567 36.9616 11.9352V19.0439H32.7814V17.3907C32.1359 18.6345 30.8763 19.2564 29.0027 19.2564C28.0108 19.2564 27.1528 19.0832 26.4285 18.7368C25.7043 18.3905 25.1532 17.926 24.7753 17.3434C24.4132 16.7452 24.2322 16.0681 24.2322 15.3124C24.2322 14.1001 24.6966 13.1633 25.6255 12.502C26.5545 11.825 27.9872 11.4865 29.9238 11.4865H32.4744C32.3957 10.1325 31.4904 9.45546 29.7585 9.45546C29.1444 9.45546 28.5225 9.5578 27.8927 9.76248C27.263 9.95141 26.7277 10.2191 26.2868 10.5654L24.7753 7.51889C25.4838 7.04655 26.3419 6.68443 27.3496 6.43252C28.3729 6.16486 29.3963 6.03103 30.4197 6.03103ZM30.2544 16.4224C30.774 16.4224 31.2306 16.2964 31.6242 16.0445C32.0178 15.7926 32.3012 15.4226 32.4744 14.9345V13.8246H30.5378C29.231 13.8246 28.5776 14.2575 28.5776 15.1235C28.5776 15.5171 28.7272 15.832 29.0263 16.0681C29.3255 16.3043 29.7348 16.4224 30.2544 16.4224Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M47.8472 6.03103C49.0123 6.03103 50.0672 6.29869 51.0118 6.834C51.9723 7.36931 52.728 8.14079 53.279 9.14844C53.8458 10.1403 54.1292 11.2976 54.1292 12.6201C54.1292 13.9426 53.8458 15.1077 53.279 16.1154C52.728 17.123 51.9723 17.9024 51.0118 18.4534C50.0672 18.9887 49.0123 19.2564 47.8472 19.2564C46.1625 19.2564 44.903 18.7605 44.0685 17.7685V19.0439H39.7939V1.52024H44.2811V7.35357C45.147 6.47188 46.3357 6.03103 47.8472 6.03103ZM46.9025 15.6903C47.6898 15.6903 48.3353 15.4226 48.8391 14.8873C49.3429 14.3363 49.5948 13.5805 49.5948 12.6201C49.5948 11.6754 49.3429 10.9354 48.8391 10.4001C48.3353 9.86482 47.6898 9.59716 46.9025 9.59716C46.1153 9.59716 45.4698 9.86482 44.966 10.4001C44.4621 10.9354 44.2102 11.6754 44.2102 12.6201C44.2102 13.5805 44.4621 14.3363 44.966 14.8873C45.4698 15.4226 46.1153 15.6903 46.9025 15.6903Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M61.3936 6.03103C63.5191 6.03103 65.1408 6.51911 66.2586 7.49527C67.3765 8.45568 67.9354 9.93567 67.9354 11.9352V19.0439H63.7553V17.3907C63.1097 18.6345 61.8502 19.2564 59.9766 19.2564C58.9847 19.2564 58.1266 19.0832 57.4024 18.7368C56.6781 18.3905 56.1271 17.926 55.7492 17.3434C55.3871 16.7452 55.206 16.0681 55.206 15.3124C55.206 14.1001 55.6705 13.1633 56.5994 12.502C57.5283 11.825 58.9611 11.4865 60.8977 11.4865H63.4483C63.3695 10.1325 62.4642 9.45546 60.7323 9.45546C60.1183 9.45546 59.4964 9.5578 58.8666 9.76248C58.2368 9.95141 57.7015 10.2191 57.2607 10.5654L55.7492 7.51889C56.4577 7.04655 57.3158 6.68443 58.3234 6.43252C59.3468 6.16486 60.3702 6.03103 61.3936 6.03103ZM61.2283 16.4224C61.7479 16.4224 62.2044 16.2964 62.5981 16.0445C62.9917 15.7926 63.2751 15.4226 63.4483 14.9345V13.8246H61.5117C60.2049 13.8246 59.5515 14.2575 59.5515 15.1235C59.5515 15.5171 59.7011 15.832 60.0002 16.0681C60.2994 16.3043 60.7087 16.4224 61.2283 16.4224Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M70.7678 1.52024H75.2549V19.0439H70.7678V1.52024Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M83.6265 6.03103C85.752 6.03103 87.3737 6.51911 88.4916 7.49527C89.6094 8.45568 90.1683 9.93567 90.1683 11.9352V19.0439H85.9882V17.3907C85.3427 18.6345 84.0831 19.2564 82.2095 19.2564C81.2176 19.2564 80.3595 19.0832 79.6353 18.7368C78.911 18.3905 78.36 17.926 77.9821 17.3434C77.62 16.7452 77.4389 16.0681 77.4389 15.3124C77.4389 14.1001 77.9034 13.1633 78.8323 12.502C79.7612 11.825 81.194 11.4865 83.1306 11.4865H85.6812C85.6024 10.1325 84.6971 9.45546 82.9652 9.45546C82.3512 9.45546 81.7293 9.5578 81.0995 9.76248C80.4698 9.95141 79.9344 10.2191 79.4936 10.5654L77.9821 7.51889C78.6906 7.04655 79.5487 6.68443 80.5563 6.43252C81.5797 6.16486 82.6031 6.03103 83.6265 6.03103ZM83.4612 16.4224C83.9808 16.4224 84.4374 16.2964 84.831 16.0445C85.2246 15.7926 85.508 15.4226 85.6812 14.9345V13.8246H83.7446C82.4378 13.8246 81.7844 14.2575 81.7844 15.1235C81.7844 15.5171 81.934 15.832 82.2331 16.0681C82.5323 16.3043 82.9416 16.4224 83.4612 16.4224Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M94.89 19.2564C94.1343 19.2564 93.4966 19.0045 92.9771 18.5007C92.4575 17.9968 92.1977 17.3592 92.1977 16.5877C92.1977 15.8005 92.4496 15.1628 92.9535 14.6748C93.473 14.1867 94.1185 13.9426 94.89 13.9426C95.6773 13.9426 96.3228 14.1867 96.8266 14.6748C97.3304 15.1628 97.5823 15.8005 97.5823 16.5877C97.5823 17.3592 97.3225 17.9968 96.803 18.5007C96.2992 19.0045 95.6615 19.2564 94.89 19.2564Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M106.162 19.2564C104.745 19.2564 103.477 18.973 102.359 18.4062C101.242 17.8394 100.368 17.0522 99.7379 16.0445C99.1239 15.0369 98.8169 13.8954 98.8169 12.6201C98.8169 11.3448 99.1239 10.2112 99.7379 9.21929C100.368 8.21164 101.242 7.43229 102.359 6.88123C103.477 6.31443 104.745 6.03103 106.162 6.03103C107.61 6.03103 108.862 6.34592 109.917 6.9757C110.972 7.58974 111.719 8.44781 112.16 9.54993L108.689 11.3212C108.106 10.1718 107.256 9.59716 106.138 9.59716C105.335 9.59716 104.666 9.86482 104.131 10.4001C103.611 10.9354 103.351 11.6754 103.351 12.6201C103.351 13.5805 103.611 14.3363 104.131 14.8873C104.666 15.4226 105.335 15.6903 106.138 15.6903C107.256 15.6903 108.106 15.1156 108.689 13.9663L112.16 15.7375C111.719 16.8396 110.972 17.7056 109.917 18.3353C108.862 18.9494 107.61 19.2564 106.162 19.2564Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M120.135 19.2564C118.765 19.2564 117.529 18.973 116.427 18.4062C115.325 17.8394 114.459 17.0522 113.83 16.0445C113.215 15.0369 112.908 13.8954 112.908 12.6201C112.908 11.3605 113.215 10.2269 113.83 9.21929C114.459 8.21164 115.317 7.43229 116.404 6.88123C117.506 6.31443 118.75 6.03103 120.135 6.03103C121.521 6.03103 122.765 6.31443 123.867 6.88123C124.969 7.43229 125.827 8.21164 126.441 9.21929C127.055 10.2112 127.362 11.3448 127.362 12.6201C127.362 13.8954 127.055 15.0369 126.441 16.0445C125.827 17.0522 124.969 17.8394 123.867 18.4062C122.765 18.973 121.521 19.2564 120.135 19.2564ZM120.135 15.6903C120.922 15.6903 121.568 15.4226 122.072 14.8873C122.576 14.3363 122.827 13.5805 122.827 12.6201C122.827 11.6754 122.576 10.9354 122.072 10.4001C121.568 9.86482 120.922 9.59716 120.135 9.59716C119.348 9.59716 118.702 9.86482 118.199 10.4001C117.695 10.9354 117.443 11.6754 117.443 12.6201C117.443 13.5805 117.695 14.3363 118.199 14.8873C118.702 15.4226 119.348 15.6903 120.135 15.6903Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M146.114 6.03103C147.688 6.03103 148.94 6.50337 149.869 7.44804C150.814 8.39271 151.286 9.81758 151.286 11.7227V19.0439H146.799V12.4548C146.799 11.5573 146.626 10.8961 146.279 10.471C145.949 10.0459 145.476 9.83333 144.862 9.83333C144.185 9.83333 143.642 10.0695 143.233 10.5418C142.823 11.0142 142.619 11.7305 142.619 12.691V19.0439H138.131V12.4548C138.131 10.7071 137.486 9.83333 136.195 9.83333C135.502 9.83333 134.951 10.0695 134.542 10.5418C134.132 11.0142 133.928 11.7305 133.928 12.691V19.0439H129.441V6.24358H133.715V7.58974C134.187 7.07017 134.746 6.68443 135.392 6.43252C136.053 6.16486 136.77 6.03103 137.541 6.03103C138.439 6.03103 139.241 6.19635 139.95 6.52698C140.658 6.85762 141.233 7.36144 141.674 8.03845C142.178 7.39293 142.815 6.89698 143.587 6.5506C144.358 6.20422 145.201 6.03103 146.114 6.03103Z"
        stroke="black"
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
      <mask id="path-1-inside-1" fill="white">
        <path d="M3.7334 23.838C2.42661 23.838 1.38748 23.6176 0.615997 23.1768L1.7496 19.9885C2.15896 20.2404 2.62342 20.3664 3.14299 20.3664C3.55234 20.3664 3.8751 20.2247 4.11127 19.9413C4.34744 19.6579 4.46552 19.2407 4.46552 18.6896V6.24358H8.9527V18.7132C8.9527 20.2877 8.48823 21.5315 7.55931 22.4447C6.64613 23.3736 5.37083 23.838 3.7334 23.838ZM6.70911 4.82658C5.8904 4.82658 5.22913 4.59828 4.7253 4.14169C4.22148 3.6851 3.96957 3.1183 3.96957 2.44129C3.96957 1.76428 4.22148 1.19747 4.7253 0.740884C5.22913 0.284295 5.8904 0.0559998 6.70911 0.0559998C7.52782 0.0559998 8.18909 0.276423 8.69291 0.717268C9.19673 1.14237 9.44865 1.69343 9.44865 2.37044C9.44865 3.07894 9.19673 3.66936 8.69291 4.14169C8.18909 4.59828 7.52782 4.82658 6.70911 4.82658Z" />
        <path d="M22.9884 15.6903V19.0439H11.18V16.3988L17.1078 9.57354H11.3454V6.24358H22.7522V8.86504L16.8244 15.6903H22.9884Z" />
        <path d="M30.4197 6.03103C32.5452 6.03103 34.1669 6.51911 35.2848 7.49527C36.4026 8.45568 36.9616 9.93567 36.9616 11.9352V19.0439H32.7814V17.3907C32.1359 18.6345 30.8763 19.2564 29.0027 19.2564C28.0108 19.2564 27.1528 19.0832 26.4285 18.7368C25.7043 18.3905 25.1532 17.926 24.7753 17.3434C24.4132 16.7452 24.2322 16.0681 24.2322 15.3124C24.2322 14.1001 24.6966 13.1633 25.6255 12.502C26.5545 11.825 27.9872 11.4865 29.9238 11.4865H32.4744C32.3957 10.1325 31.4904 9.45546 29.7585 9.45546C29.1444 9.45546 28.5225 9.5578 27.8927 9.76248C27.263 9.95141 26.7277 10.2191 26.2868 10.5654L24.7753 7.51889C25.4838 7.04655 26.3419 6.68443 27.3496 6.43252C28.3729 6.16486 29.3963 6.03103 30.4197 6.03103ZM30.2544 16.4224C30.774 16.4224 31.2306 16.2964 31.6242 16.0445C32.0178 15.7926 32.3012 15.4226 32.4744 14.9345V13.8246H30.5378C29.231 13.8246 28.5776 14.2575 28.5776 15.1235C28.5776 15.5171 28.7272 15.832 29.0263 16.0681C29.3255 16.3043 29.7348 16.4224 30.2544 16.4224Z" />
        <path d="M47.8472 6.03103C49.0123 6.03103 50.0672 6.29869 51.0118 6.834C51.9723 7.36931 52.728 8.14079 53.279 9.14844C53.8458 10.1403 54.1292 11.2976 54.1292 12.6201C54.1292 13.9426 53.8458 15.1077 53.279 16.1154C52.728 17.123 51.9723 17.9024 51.0118 18.4534C50.0672 18.9887 49.0123 19.2564 47.8472 19.2564C46.1625 19.2564 44.903 18.7605 44.0685 17.7685V19.0439H39.7939V1.52024H44.2811V7.35357C45.147 6.47188 46.3357 6.03103 47.8472 6.03103ZM46.9025 15.6903C47.6898 15.6903 48.3353 15.4226 48.8391 14.8873C49.3429 14.3363 49.5948 13.5805 49.5948 12.6201C49.5948 11.6754 49.3429 10.9354 48.8391 10.4001C48.3353 9.86482 47.6898 9.59716 46.9025 9.59716C46.1153 9.59716 45.4698 9.86482 44.966 10.4001C44.4621 10.9354 44.2102 11.6754 44.2102 12.6201C44.2102 13.5805 44.4621 14.3363 44.966 14.8873C45.4698 15.4226 46.1153 15.6903 46.9025 15.6903Z" />
        <path d="M61.3936 6.03103C63.5191 6.03103 65.1408 6.51911 66.2586 7.49527C67.3765 8.45568 67.9354 9.93567 67.9354 11.9352V19.0439H63.7553V17.3907C63.1097 18.6345 61.8502 19.2564 59.9766 19.2564C58.9847 19.2564 58.1266 19.0832 57.4024 18.7368C56.6781 18.3905 56.1271 17.926 55.7492 17.3434C55.3871 16.7452 55.206 16.0681 55.206 15.3124C55.206 14.1001 55.6705 13.1633 56.5994 12.502C57.5283 11.825 58.9611 11.4865 60.8977 11.4865H63.4483C63.3695 10.1325 62.4642 9.45546 60.7323 9.45546C60.1183 9.45546 59.4964 9.5578 58.8666 9.76248C58.2368 9.95141 57.7015 10.2191 57.2607 10.5654L55.7492 7.51889C56.4577 7.04655 57.3158 6.68443 58.3234 6.43252C59.3468 6.16486 60.3702 6.03103 61.3936 6.03103ZM61.2283 16.4224C61.7479 16.4224 62.2044 16.2964 62.5981 16.0445C62.9917 15.7926 63.2751 15.4226 63.4483 14.9345V13.8246H61.5117C60.2049 13.8246 59.5515 14.2575 59.5515 15.1235C59.5515 15.5171 59.7011 15.832 60.0002 16.0681C60.2994 16.3043 60.7087 16.4224 61.2283 16.4224Z" />
        <path d="M70.7678 1.52024H75.2549V19.0439H70.7678V1.52024Z" />
        <path d="M83.6265 6.03103C85.752 6.03103 87.3737 6.51911 88.4916 7.49527C89.6094 8.45568 90.1683 9.93567 90.1683 11.9352V19.0439H85.9882V17.3907C85.3427 18.6345 84.0831 19.2564 82.2095 19.2564C81.2176 19.2564 80.3595 19.0832 79.6353 18.7368C78.911 18.3905 78.36 17.926 77.9821 17.3434C77.62 16.7452 77.4389 16.0681 77.4389 15.3124C77.4389 14.1001 77.9034 13.1633 78.8323 12.502C79.7612 11.825 81.194 11.4865 83.1306 11.4865H85.6812C85.6024 10.1325 84.6971 9.45546 82.9652 9.45546C82.3512 9.45546 81.7293 9.5578 81.0995 9.76248C80.4698 9.95141 79.9344 10.2191 79.4936 10.5654L77.9821 7.51889C78.6906 7.04655 79.5487 6.68443 80.5563 6.43252C81.5797 6.16486 82.6031 6.03103 83.6265 6.03103ZM83.4612 16.4224C83.9808 16.4224 84.4374 16.2964 84.831 16.0445C85.2246 15.7926 85.508 15.4226 85.6812 14.9345V13.8246H83.7446C82.4378 13.8246 81.7844 14.2575 81.7844 15.1235C81.7844 15.5171 81.934 15.832 82.2331 16.0681C82.5323 16.3043 82.9416 16.4224 83.4612 16.4224Z" />
        <path d="M94.89 19.2564C94.1343 19.2564 93.4966 19.0045 92.9771 18.5007C92.4575 17.9968 92.1977 17.3592 92.1977 16.5877C92.1977 15.8005 92.4496 15.1628 92.9535 14.6748C93.473 14.1867 94.1185 13.9426 94.89 13.9426C95.6773 13.9426 96.3228 14.1867 96.8266 14.6748C97.3304 15.1628 97.5823 15.8005 97.5823 16.5877C97.5823 17.3592 97.3225 17.9968 96.803 18.5007C96.2992 19.0045 95.6615 19.2564 94.89 19.2564Z" />
        <path d="M106.162 19.2564C104.745 19.2564 103.477 18.973 102.359 18.4062C101.242 17.8394 100.368 17.0522 99.7379 16.0445C99.1239 15.0369 98.8169 13.8954 98.8169 12.6201C98.8169 11.3448 99.1239 10.2112 99.7379 9.21929C100.368 8.21164 101.242 7.43229 102.359 6.88123C103.477 6.31443 104.745 6.03103 106.162 6.03103C107.61 6.03103 108.862 6.34592 109.917 6.9757C110.972 7.58974 111.719 8.44781 112.16 9.54993L108.689 11.3212C108.106 10.1718 107.256 9.59716 106.138 9.59716C105.335 9.59716 104.666 9.86482 104.131 10.4001C103.611 10.9354 103.351 11.6754 103.351 12.6201C103.351 13.5805 103.611 14.3363 104.131 14.8873C104.666 15.4226 105.335 15.6903 106.138 15.6903C107.256 15.6903 108.106 15.1156 108.689 13.9663L112.16 15.7375C111.719 16.8396 110.972 17.7056 109.917 18.3353C108.862 18.9494 107.61 19.2564 106.162 19.2564Z" />
        <path d="M120.135 19.2564C118.765 19.2564 117.529 18.973 116.427 18.4062C115.325 17.8394 114.459 17.0522 113.83 16.0445C113.215 15.0369 112.908 13.8954 112.908 12.6201C112.908 11.3605 113.215 10.2269 113.83 9.21929C114.459 8.21164 115.317 7.43229 116.404 6.88123C117.506 6.31443 118.75 6.03103 120.135 6.03103C121.521 6.03103 122.765 6.31443 123.867 6.88123C124.969 7.43229 125.827 8.21164 126.441 9.21929C127.055 10.2112 127.362 11.3448 127.362 12.6201C127.362 13.8954 127.055 15.0369 126.441 16.0445C125.827 17.0522 124.969 17.8394 123.867 18.4062C122.765 18.973 121.521 19.2564 120.135 19.2564ZM120.135 15.6903C120.922 15.6903 121.568 15.4226 122.072 14.8873C122.576 14.3363 122.827 13.5805 122.827 12.6201C122.827 11.6754 122.576 10.9354 122.072 10.4001C121.568 9.86482 120.922 9.59716 120.135 9.59716C119.348 9.59716 118.702 9.86482 118.199 10.4001C117.695 10.9354 117.443 11.6754 117.443 12.6201C117.443 13.5805 117.695 14.3363 118.199 14.8873C118.702 15.4226 119.348 15.6903 120.135 15.6903Z" />
        <path d="M146.114 6.03103C147.688 6.03103 148.94 6.50337 149.869 7.44804C150.814 8.39271 151.286 9.81758 151.286 11.7227V19.0439H146.799V12.4548C146.799 11.5573 146.626 10.8961 146.279 10.471C145.949 10.0459 145.476 9.83333 144.862 9.83333C144.185 9.83333 143.642 10.0695 143.233 10.5418C142.823 11.0142 142.619 11.7305 142.619 12.691V19.0439H138.131V12.4548C138.131 10.7071 137.486 9.83333 136.195 9.83333C135.502 9.83333 134.951 10.0695 134.542 10.5418C134.132 11.0142 133.928 11.7305 133.928 12.691V19.0439H129.441V6.24358H133.715V7.58974C134.187 7.07017 134.746 6.68443 135.392 6.43252C136.053 6.16486 136.77 6.03103 137.541 6.03103C138.439 6.03103 139.241 6.19635 139.95 6.52698C140.658 6.85762 141.233 7.36144 141.674 8.03845C142.178 7.39293 142.815 6.89698 143.587 6.5506C144.358 6.20422 145.201 6.03103 146.114 6.03103Z" />
      </mask>
    </svg>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
