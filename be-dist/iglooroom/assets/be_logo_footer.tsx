import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
interface BeLogoFooterProps extends JSXBase.SVGAttributes<SVGElement> {}
const BeLogoFooter: FunctionalComponent<BeLogoFooterProps> = ({ width, height, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 707 188" width={width || 200} height={height || 70} {...props}>
      <path
        fill="#8B8A8A"
        d="M339.283 1.89725C340.262 1.63601 340.946 1.7496 341.85 2.17011C342.922 2.66921 343.935 3.60333 344.328 4.74034C344.678 5.7531 344.606 7.1187 344.109 8.07077C343.381 9.46903 342.325 9.95832 340.9 10.4243C340.146 10.5013 339.376 10.5676 338.649 10.3087C337.564 9.92205 336.455 8.98549 335.96 7.9401C335.565 7.1049 335.324 5.61446 335.684 4.74497C336.295 3.26871 337.921 2.50234 339.283 1.89725Z"
      />
      <path
        fill="#8B8A8A"
        d="M338.68 15.0055C339.336 14.7544 340.225 14.7857 340.9 14.9822C342.085 15.3277 343.493 16.2572 344.076 17.3705C345.077 19.2842 344.92 45.1132 344.038 47.608C343.534 49.0344 342.57 49.8177 341.245 50.4364C340.274 50.7309 339.084 50.5338 338.138 50.2093C337.31 49.9253 336.622 49.2054 336.242 48.4282C335.305 46.5126 335.543 44.0328 335.535 41.9592L335.514 30.7392L335.42 22.1683C335.423 20.8041 335.311 19.0328 335.781 17.7418C336.304 16.3077 337.368 15.6362 338.68 15.0055Z"
      />
      <path
        fill="#99C6D6"
        d="M11.1036 46.294C13.1404 46.2894 15.5981 46.5031 17.4131 47.4711C20.0431 48.8739 21.9743 52.1968 22.7806 54.9602C23.8093 58.4857 23.094 62.7264 21.3088 65.8848C19.6792 68.7681 17.1976 70.1856 14.0748 71.0464C12.5396 71.0313 10.6111 70.8674 9.22746 70.1706C6.23825 68.6654 3.81726 66.0113 2.76608 62.8208C1.6247 59.3566 1.95275 55.6807 3.62703 52.4581C5.2181 49.3957 7.85947 47.3318 11.1036 46.294Z"
      />
      <path
        fill="#8B8A8A"
        d="M481.699 15.0055L481.81 14.9643C482.636 14.6919 483.932 14.7142 484.716 15.1164C486.265 15.9103 486.812 17.8966 487.322 19.4217C488.929 17.6132 490.673 15.5272 493.139 14.9497C495.384 14.4241 498.711 15.0553 500.628 16.3189C501.628 16.9781 502.736 18.1731 502.942 19.3937C503.125 20.4751 502.642 21.3248 502.031 22.1681C499.222 23.8571 497.63 22.6134 494.657 22.3336C493.268 22.2029 491.656 22.3507 490.553 23.2988C488.061 25.4413 487.795 30.072 487.526 33.1255L487.533 41.8376C487.534 43.4737 487.681 45.3841 487.312 46.9842C487.045 48.1412 486.205 49.2473 485.195 49.8637C484.082 50.5428 482.293 50.6814 481.057 50.3225C480.123 50.0513 479.565 49.4199 479.137 48.5862C478.458 47.2662 478.446 45.4686 478.364 44.0153C478.148 40.1459 478.371 36.3046 478.399 32.4356C478.431 28.0138 477.736 21.9886 479.066 17.838C479.536 16.3708 480.358 15.6806 481.699 15.0055Z"
      />
      <path
        fill="#8B8A8A"
        d="M358.051 15.0055C358.98 14.7773 360.239 15.0694 361.053 15.5641C362.599 16.5036 362.841 18.556 363.232 20.1875C366.339 17.7076 369.573 15.1118 373.71 14.8473C376.705 14.6558 380.553 15.6446 382.802 17.6527C385.245 19.8337 386.163 22.5209 386.322 25.7191L386.495 38.9491C386.503 41.5239 386.754 44.5863 386.187 47.0925C385.993 47.9534 385.597 48.6792 385 49.3251C384.179 50.2123 383.307 50.6792 382.086 50.711C380.991 50.7394 379.921 50.3468 379.135 49.5738C376.63 47.1101 377.64 36.4057 377.638 32.7457C377.596 30.4249 377.648 27.6104 376.899 25.4058C376.449 24.0792 375.872 22.5876 374.512 21.9615C373.314 21.4101 370.013 21.5296 368.797 21.9997C361.619 24.7747 363.51 36.7154 363.514 42.8576C363.515 44.4837 363.728 46.4986 363.035 47.9954C362.532 49.0807 361.738 49.9596 360.596 50.3781C359.613 50.738 358.568 50.6999 357.617 50.2587C356.621 49.7967 355.849 49.0603 355.49 48.0129C354.696 45.6997 354.838 43.028 354.832 40.6147L354.814 29.1864C354.783 26.1832 353.96 19.5764 355.313 16.9825C355.968 15.7269 356.776 15.4198 358.051 15.0055Z"
      />
      <path
        fill="#8B8A8A"
        d="M253.837 15.0055C255.023 14.7115 256.204 14.8847 257.244 15.5519C258.672 16.4682 259.118 18.7437 259.488 20.2691C260.839 18.8716 262.138 17.537 263.855 16.5872C267.525 14.5575 271.166 14.4746 275.117 15.644C277.624 16.3858 279.707 18.2101 280.93 20.5064C281.65 21.8575 282.042 23.3483 282.24 24.8601C282.849 29.4906 282.526 34.6008 282.564 39.2843C282.585 41.7771 282.999 45.2157 282.242 47.5669C281.876 48.7017 280.977 49.8119 279.893 50.3488C278.979 50.8015 277.663 50.8607 276.704 50.52C275.741 50.1775 274.862 49.4176 274.421 48.4999L274.343 48.3331C273.48 46.5169 273.744 44.1006 273.73 42.1272L273.669 32.3705C273.563 30.2123 273.52 27.9698 273.066 25.8532C272.747 24.3665 271.941 22.841 270.628 22.0145C269.322 21.1924 267.376 21.2222 265.923 21.5734C257.385 23.6362 259.55 36.5347 259.58 42.968C259.589 44.8968 259.86 47.1096 258.797 48.811C257.349 50.1314 256.233 50.6952 254.251 50.6129C253.14 50.1213 252.314 49.5642 251.708 48.4809C249.818 45.1031 250.686 34.7085 250.675 30.5011C250.664 26.54 250.073 21.3194 251.219 17.5622C251.669 16.0865 252.572 15.6803 253.837 15.0055Z"
      />
      <path
        fill="#99C6D6"
        d="M211.407 138.817C211.891 138.699 212.22 138.745 212.693 138.844C211.681 141.507 209.813 144.292 208.076 146.549C202.344 153.994 193.263 159.176 183.929 160.379C174.065 161.651 164.385 158.325 156.629 152.371C154.54 150.607 152.799 148.509 151.225 146.288L162.139 144.727C164.396 144.362 167.605 143.471 169.875 143.794C170.68 143.908 171.811 144.854 172.504 145.298C177.352 148.402 181.693 149.623 187.508 148.993C188.41 148.895 189.876 147.363 190.497 146.716C192.601 144.523 194.559 141.891 197.422 140.691C201.572 138.952 206.944 139.071 211.407 138.817Z"
      />
      <path
        fill="#8B8A8A"
        d="M652.009 15.0055C652.864 14.7687 653.521 14.6857 654.357 15.0544C657.693 16.5272 663.211 36.7969 664.801 41.1676C665.831 39.2318 666.439 36.8011 667.157 34.7192L671.896 21.1166C672.523 19.4919 673.546 16.33 675.122 15.3834C675.917 14.9059 677.128 14.6592 678.018 14.9503C679.188 15.3332 680.066 16.211 680.591 17.2972C680.95 19.8326 679.696 22.6483 678.902 25.0394L671.332 44.7354C669.849 49.109 668.526 54.0155 666.023 57.9234C664.435 60.4015 662.416 62.8031 659.392 63.4399C656.801 63.9854 651.094 64.1917 648.875 62.6484C648.166 62.1553 647.757 61.2108 647.657 60.367C647.539 59.3732 647.895 58.7081 648.486 57.9434C650.025 56.7094 653.894 57.3336 655.864 57.3377C657.657 55.8262 658.905 53.7015 659.986 51.6558C660.16 51.3258 660.73 50.4916 660.765 50.1529C660.829 49.5304 659.168 46.3798 658.854 45.6337L651.952 28.6013C651.012 26.2781 648.006 20.3474 648.793 17.9308C649.289 16.4093 650.657 15.6506 652.009 15.0055Z"
      />
      <path
        fill="#8B8A8A"
        d="M224.154 14.6071L224.566 14.5808C229.248 14.3626 233.696 15.4618 237.194 18.6691C240.106 21.3389 242.101 25.534 242.22 29.4936C242.262 30.8943 241.764 32.2233 240.796 33.2368C238.452 35.6892 220.833 34.888 216.826 34.8788C217.359 37.1765 217.946 39.694 219.345 41.6322C220.62 43.3986 222.518 44.6445 224.684 44.9939C230.449 45.924 233.422 41.9611 237.624 38.968L239.234 38.7137C240.558 39.3126 240.815 39.4626 241.559 40.7046C241.764 42.0413 241.572 42.9908 240.779 44.1041C238.373 47.4824 233.878 49.8004 229.813 50.4768C224.852 51.302 219.226 50.3326 215.127 47.3506C211.438 44.6673 209.224 40.2966 208.573 35.854C207.806 30.6103 209.042 24.6227 212.264 20.3607C215.145 16.5518 219.639 15.2197 224.154 14.6071ZM223.456 20.7435C219.186 23.3604 218.445 25.3567 217.016 30.0429L228.273 30.0376L233.973 30.0145C233.421 27.2603 233.002 23.8989 230.483 22.1934C228.446 20.8148 225.86 20.353 223.456 20.7435Z"
      />
      <path
        fill="#8B8A8A"
        d="M410.129 14.5849L412.628 14.5023C417.042 14.468 421.241 16.232 424.38 19.3428C427.047 21.9851 428.883 25.7365 428.873 29.5323C428.869 30.8622 428.589 32.1902 427.593 33.1397C424.461 36.1255 408.053 35.1158 403.436 34.9709C403.991 36.9221 404.411 39.1766 405.551 40.8738C406.761 42.6777 408.622 44.3389 410.838 44.7284C416.857 45.786 419.248 42.2722 423.642 39.1921L425.132 38.7461C425.674 38.8135 426.297 38.8974 426.763 39.2013C427.425 39.6331 427.948 40.2739 428.098 41.0625C428.307 42.1579 427.852 43.0886 427.258 43.9738C424.903 47.4886 420.941 49.5592 416.854 50.3613C411.987 51.3166 405.848 50.3014 401.73 47.495C397.69 44.7417 395.931 40.6122 395.065 35.9788C394.217 31.4431 395.112 25.5478 397.746 21.7502C400.79 17.3624 405.014 15.4913 410.129 14.5849ZM410.515 20.7347C408.367 21.7048 405.983 22.902 405.091 25.2454L403.69 30.0336L414.689 30.0402L420.455 30.0385C419.741 27.1673 419.343 23.7546 416.597 22.0784C414.739 20.9439 412.657 20.6588 410.515 20.7347Z"
      />
      <path
        fill="#8B8A8A"
        d="M450.57 14.5572L451.368 14.501C456.639 14.3482 461.481 15.4378 465.424 19.2178C468.151 21.8318 469.8 25.7154 469.807 29.4936C469.81 30.8383 469.465 32.3721 468.478 33.3377C465.437 36.3104 449.221 35.0545 444.406 34.9895C445.149 37.589 445.765 40.0311 447.49 42.1783C448.785 43.7913 450.947 44.8146 452.978 45.0304C457.89 45.5524 460.826 42.2487 464.315 39.4093L466.213 38.7252C466.704 38.8013 467.362 38.8785 467.791 39.1378C468.536 39.5882 468.995 40.1719 469.175 41.0302C469.394 42.0712 468.923 43.2462 468.365 44.103C466.101 47.5805 462.046 49.5941 458.083 50.4C453.348 51.3629 447.039 50.3609 443.034 47.6818C439.492 45.3131 437.261 41.7725 436.454 37.5896C435.359 31.9217 435.881 25.9504 439.203 21.0723C441.963 17.019 445.968 15.4604 450.57 14.5572ZM451.259 20.7133C448.882 21.7211 446.909 23.0179 445.919 25.5249L444.535 30.028L455.425 30.0133L461.389 30.0235C460.652 26.9155 460.13 23.6301 457.201 21.8115C455.459 20.7301 453.26 20.5754 451.259 20.7133Z"
      />
      <path
        fill="#8B8A8A"
        d="M520.322 14.5572C525.038 14.3378 530.073 14.777 533.81 17.9934C537.01 20.7466 539.271 24.5754 539.57 28.8376C539.678 30.3713 539.542 32.0247 538.451 33.2147C536.237 35.6318 518.279 35.002 514.261 35.0669C514.786 36.9337 515.282 39.2547 516.299 40.9076C517.455 42.7874 519.435 44.3404 521.604 44.8263C527.332 46.1098 530.561 41.7557 534.803 39.0375L535.946 38.7084C537.234 38.9291 537.768 39.3647 538.627 40.3214C538.975 41.6481 538.946 42.6705 538.237 43.9034C536.651 46.6628 533.22 48.8533 530.18 49.672C524.763 51.1304 518.563 51.1364 513.587 48.2667C509.53 45.9271 507.209 42.1328 506.04 37.7048C504.714 32.6822 505.485 26.7478 508.136 22.2665C511.022 17.387 515.096 15.8801 520.322 14.5572ZM521.014 20.7394C518.173 22.18 516.531 23.3042 515.515 26.4075L514.302 30.0367L524.554 30.0405L531.154 30.0152C530.391 26.8514 529.967 23.7013 526.939 21.85C525.08 20.7141 523.128 20.6315 521.014 20.7394Z"
      />
      <path
        fill="#99C6D6"
        d="M293.149 133L298.93 132.79C295.635 140.35 291.641 147.329 285.2 152.67C278.165 158.504 269.069 161.031 260.033 160.182C249.579 159.2 241.851 155.146 235.155 147.073C232.652 144.012 231.014 140.662 229.477 137.048L245.059 135.741C245.411 135.717 247.285 135.451 247.511 135.571C248.01 135.838 249.62 139.019 250.073 139.691C251.366 141.607 252.879 143.354 254.63 144.867C259.562 149.129 264.701 149.425 270.949 148.967C274.926 146.308 278.2 142.832 280.483 138.598C281.352 136.989 282.023 135.214 283.094 133.73L293.149 133Z"
      />
      <path
        fill="#0F4267"
        d="M451.148 130.91L451.438 130.889C455.536 130.838 459.733 131.314 463.849 131.407C464.529 131.423 467.256 131.226 467.742 131.491C467.757 131.499 467.908 131.914 467.923 131.952C469.738 136.523 472.17 140.217 475.643 143.688C480.853 148.895 485.87 149.222 492.92 149.223C498.526 144.551 501.792 140.28 504.846 133.644C509.952 133.303 515.239 133.976 520.339 134.319L516.258 142.141C512.667 147.656 508.627 152.055 503.004 155.583C495.746 160.137 485.086 161.599 476.801 159.69C467.916 157.644 460.03 152.327 455.172 144.534C453.229 141.418 451.534 137.928 450.446 134.417C450.13 133.398 449.722 132.323 449.972 131.255L451.148 130.91Z"
      />
      <path
        fill="#0F4267"
        d="M373.715 130.219L376.471 130.104L382.07 130.073C382.392 130.071 383.487 129.961 383.727 130.068C384.024 130.2 384.956 132.39 385.131 132.758C387.173 137.045 389.245 140.591 392.682 143.911C396.627 147.722 401.626 149.28 407.022 149.184C407.682 149.172 408.934 149.263 409.525 149.068C410.379 148.786 411.519 147.818 412.214 147.253C415.95 144.219 418.876 139.724 420.746 135.318C421.284 134.05 421.795 131.474 422.69 130.546L438.044 130.75C436.818 135.144 434.83 138.997 432.581 142.943L431.127 145.197C425.701 153.166 416.935 158.284 407.558 160.041C399.161 161.615 389.412 159.899 382.333 155.036C374.015 149.32 368.174 140.306 366.324 130.39L373.715 130.219Z"
      />
      <path
        fill="#8B8A8A"
        d="M612.39 1.55229C612.736 1.45337 613.062 1.45799 613.417 1.49674C614.641 1.63028 615.59 2.20191 616.356 3.15248C617.86 5.02146 617.528 7.95571 617.513 10.2293C617.491 13.4641 617.534 16.7415 617.188 19.9605C621.097 17.1995 624.98 14.7052 630.002 14.8076C633.62 14.8813 637.259 16.6315 639.719 19.2348C643.218 22.9371 644.037 28.3897 643.865 33.2881C643.642 39.6152 641.741 43.6358 637.13 47.9092C634.919 49.3946 632.68 50.303 629.996 50.5415C624.995 50.986 621.394 48.4556 617.76 45.4335L616.88 48.4228C616.585 49.1903 616.055 49.801 615.289 50.1221C614.176 50.5893 612.689 50.8089 611.548 50.3297C610.728 49.9852 609.967 49.3325 609.649 48.4894C608.728 46.0477 609.009 42.9079 608.998 40.3263L609.001 27.3674L608.994 12.9111C609.006 10.1628 608.676 6.11494 609.853 3.60689C610.383 2.47688 611.253 1.94826 612.39 1.55229ZM624.771 21.5152C621.993 22.5429 620.436 23.6473 619.175 26.3721C617.628 29.7158 617.398 35.2618 618.752 38.7663C619.472 40.63 621.34 42.3648 623.146 43.1386C624.59 43.7566 626.274 44.1526 627.853 44.0078C630.454 43.0148 632.594 41.4097 633.756 38.8009C635.429 35.0467 635.173 29.7609 633.708 25.9561C633.078 24.3211 631.414 22.3754 629.784 21.6898C628.286 21.0597 626.33 21.2284 624.771 21.5152Z"
      />
      <path
        fill="#8B8A8A"
        d="M576.075 1.55229C577.091 1.36917 578.607 1.75499 579.453 2.34585C580.385 2.99667 581 4.1138 581.193 5.21999C581.836 8.91486 581.32 13.4655 581.35 17.2644C581.425 26.6565 582.162 36.4194 581.235 45.7512C581.126 46.8431 580.962 48.0073 580.302 48.9191C579.576 49.9208 578.591 50.4628 577.372 50.64C576.367 50.7859 575.411 50.4098 574.619 49.8075C573.171 48.7068 572.836 46.7702 572.599 45.0762C570.361 46.9138 568.039 49.0767 565.291 50.0893C561.718 51.4061 557.659 50.4008 554.322 48.8623C553.373 48.35 552.533 47.7075 551.728 46.9906C548.315 43.9497 546.724 39.1632 546.483 34.6908C546.195 29.3555 546.526 23.6616 550.324 19.5192C552.639 16.9939 556.094 14.986 559.551 14.816C565.362 14.5302 568.575 16.2302 572.759 20.0264C572.333 16.7434 572.53 13.337 572.647 10.0368C572.711 8.21365 572.643 6.13833 573.267 4.41107C573.801 2.93553 574.693 2.20829 576.075 1.55229ZM561.641 21.4431C558.928 22.7987 557.127 24.1795 556.136 27.1718C554.884 30.952 554.801 35.805 556.625 39.432C557.54 41.252 559.06 42.9203 561.038 43.5753C562.568 44.082 564.329 44.0138 565.902 43.7571C568.851 42.3102 570.442 40.8295 571.517 37.6823C572.759 34.0479 572.532 29.3359 570.798 25.8871C569.875 24.0534 568.06 22.3511 566.076 21.7298C564.611 21.271 563.158 21.3707 561.641 21.4431Z"
      />
      <path
        fill="#0F4267"
        d="M399.985 77.7342C409.791 76.9496 418.67 79.0123 426.508 85.1024C435.14 91.8106 438.506 103.104 439.822 113.503L422.842 113.472C421.984 110.204 420.817 107.044 419.379 103.986C416.194 97.2135 411.809 92.5356 404.667 89.9593L400.393 88.9742C397.133 88.4915 394.245 89.8587 391.703 91.7712C384.728 97.0209 382.527 104.937 381.361 113.219L365.589 113.34C366.808 105.9 369.229 98.7811 373.694 92.6367C380.269 83.588 389.159 79.4312 399.985 77.7342Z"
      />
      <path
        fill="#8B8A8A"
        d="M303.669 14.952L305.655 14.8165C310.181 14.6728 313.55 17.1461 316.68 20.0838C317.096 18.6867 317.09 17.2985 318.013 16.0788C318.547 15.3733 319.487 14.9256 320.353 14.8161C321.648 14.6523 322.976 15.1805 323.984 15.9572C324.571 16.7847 324.96 17.7292 325.092 18.738C325.576 22.4309 325.21 26.559 325.221 30.3002C325.238 36.5498 325.673 43.1405 325.001 49.3388C324.532 53.6625 324.015 57.5921 320.378 60.4763C315.627 64.2448 309.297 64.0475 303.624 63.4029C299.866 62.9758 295.459 61.5029 293.037 58.4166C292.033 57.137 291.684 55.934 291.889 54.3303C292.16 53.6882 292.46 52.9448 292.973 52.459C293.69 51.7808 294.701 51.4137 295.688 51.4776C297.631 51.6034 298.664 53.1469 299.841 54.4666C301.536 56.3679 302.921 57.5488 305.575 57.6873C308.515 57.8407 312.012 57.8909 314.293 55.7288C316.694 53.4533 316.278 47.7607 316.339 44.6419C315.625 44.8704 314.61 46.119 314.022 46.6579C312.515 48.0419 311.015 48.9972 309.025 49.5251C305.898 50.3544 301.06 49.8733 298.255 48.2317C294.64 46.1157 292.262 41.6126 291.259 37.6506C289.968 32.5543 290.439 26.0107 293.195 21.4645C295.642 17.4286 299.291 16.0068 303.669 14.952ZM307.247 21.15C304.597 21.5425 303.228 22.1799 301.61 24.3555C299.442 27.2711 299.05 32.0733 299.607 35.5883C300 38.065 301.255 40.5802 303.335 42.0588C305.204 43.3879 306.924 43.5954 309.154 43.647C311.604 42.7763 314.226 40.8808 315.407 38.4839C317.094 35.0602 316.718 29.9272 315.424 26.4279C314.739 24.5717 312.785 22.5095 310.989 21.6964C309.875 21.192 308.449 21.1992 307.247 21.15Z"
      />
      <path
        fill="#0F4267"
        d="M483.515 77.737L487.03 77.6162C496.036 77.3845 504.072 79.5722 510.744 85.9256C519.424 94.1914 522.506 104.4 522.781 116.068C521.934 116.492 519.481 116.001 518.427 115.94L506.463 115.503L505.951 113.215C503.279 103.394 499.251 95.8188 490.164 90.6421C488.614 90.0269 487.196 89.528 485.545 89.2869C482.246 88.8051 479.033 88.7052 476.233 90.8086C467.983 97.0055 465.901 103.967 464.536 113.878L448.99 113.483C449.675 105.971 452.608 98.3718 457.17 92.3661C463.956 83.4322 472.545 79.2518 483.515 77.737Z"
      />
      <path
        fill="#99C6D6"
        d="M1.9284 79.1619L23.9125 79.3108C22.9641 83.3268 21.938 87.3067 21.4914 91.4176C20.6552 99.1136 21.015 106.898 20.9997 114.624C20.9791 125.097 20.6529 135.669 21.6537 146.103C22.0697 150.441 23.2006 154.63 23.7262 158.94L2.09148 159.007C1.74477 158.057 3.72728 150.142 3.9726 148.516C4.47091 145.212 4.75844 141.938 4.91543 138.602L5.05326 117.024C5.1093 108.879 5.58582 100.457 4.62294 92.358C4.09103 87.884 2.91357 83.5495 1.9284 79.1619Z"
      />
      <path
        fill="#99C6D6"
        d="M261.576 77.7374L261.718 77.7175C269.968 76.6142 279.975 79.0857 286.573 84.2059C296.898 92.2185 299.587 102.769 301.144 115.094C295.702 114.514 289.632 115.137 284.129 115.217C282.987 109.787 281.478 104.571 278.371 99.9126C274.735 94.4597 269.973 90.5362 263.437 89.2303L262.356 89.1954C257.258 89.1148 253.833 90.4432 250.151 94.0159C243.667 100.307 242.982 109.856 242.875 118.339L226.4 118.95C226.722 109.6 229.419 100.005 235.093 92.4718C241.738 83.6489 250.798 79.2663 261.576 77.7374Z"
      />
      <path
        fill="#99C6D6"
        d="M178.324 77.7315L181.168 77.5827C190.933 77.4581 198.841 79.5799 205.989 86.5693C215.481 95.8494 217.631 107.265 217.775 120.02L201.379 121.128C201.205 111.656 197.885 101.616 191.067 94.7993C186.758 90.4898 181.551 89.0693 175.631 89.0555C172.7 89.5839 170.848 90.3175 168.551 92.2921C162.232 97.7238 159.143 106.712 159.495 114.891C159.656 118.621 160.435 122.255 160.154 126.006C155.07 127.633 148.858 127.856 143.548 128.665C142.984 115.279 143.88 102.919 152.3 91.9442C158.875 83.3738 167.761 79.1194 178.324 77.7315Z"
      />
      <path
        fill="#0F4267"
        d="M351.618 77.7082C355.57 77.1352 358.99 78.0151 362.752 79.1067C360.742 84.5018 359.856 90.7205 359.277 96.4231C357.1 95.1291 354.867 93.8883 352.479 93.0207C345.769 90.5818 337.531 95.1132 331.648 97.8619C332.34 114.096 330.683 130.505 332.573 146.692C333.055 150.816 334.065 154.895 335.04 158.924L314.417 158.952L313.142 158.645C312.679 157.47 313.777 154.412 314.106 153.135C315.286 148.551 315.713 143.951 315.883 139.233L315.905 118.749C315.832 105.362 315.599 92.5013 312.931 79.3201L331.989 79.2864L331.793 93.6535L339.69 84.7108C341.295 82.948 342.951 80.8268 345.052 79.6487C347.066 78.5188 349.379 78.145 351.618 77.7082Z"
      />
      <path
        fill="#99C6D6"
        d="M130.926 45.3615C131.258 45.3391 131.544 45.5488 131.825 45.7064C131.164 51.6066 129.989 57.4238 129.549 63.3532C128.274 80.55 128.814 97.8942 128.834 115.13C128.845 124.927 128.284 135.237 129.363 144.965C129.887 149.685 131.151 154.332 132.08 158.983L110.987 158.981L110.164 158.506C110.846 153.422 112.274 148.376 112.696 143.279C113.581 132.6 113.026 121.598 113.014 110.889C112.99 90.3137 114.199 69.7614 109.842 49.5013L130.926 45.3615Z"
      />
      <path
        fill="#0F4267"
        d="M680.02 77.7267C686.896 76.8224 692.782 79.1364 699.343 80.5083L699.456 96.3251C695.056 93.4656 690.88 89.4712 685.359 89.2669C681.749 89.1333 678.499 90.1742 675.854 92.6708C674.474 93.9738 673.536 95.7223 673.503 97.6425C673.356 106.043 688.545 115.229 694.015 120.995C698.911 126.156 701.441 131.89 701.235 139.087C701.087 144.275 698.592 149.559 694.825 153.094C687.796 159.69 679.503 160.594 670.321 160.301C665.278 160.014 660.467 158.842 655.534 157.864L655.238 137.395C657.833 140.25 660.784 142.879 663.927 145.118C667.132 147.399 671.954 149.75 675.979 149.029C678.567 148.565 681.446 146.847 682.938 144.687C690.404 133.881 669.32 122.683 663.359 116.019C660.553 112.883 658.335 108.801 657.564 104.644C656.588 99.3761 657.554 93.283 660.633 88.8712C665.283 82.2069 672.278 79.0957 680.02 77.7267Z"
      />
      <path
        fill="#0F4267"
        d="M575.159 77.7098C579.524 77.2904 583.72 77.522 587.692 79.5723C593.867 82.7601 595.496 88.6959 597.412 94.7875C598.29 94.3955 599.304 93.0281 599.978 92.3209C605.795 86.2081 610.223 79.6082 619.164 77.9824C623.701 77.1575 630.198 77.4228 634.052 80.1375C636.973 82.1952 639.244 85.2485 640.454 88.6018C643.065 95.8394 642.712 104.281 642.701 111.867L642.759 138.409C643.04 145.441 644.617 152.248 645.786 159.158L623.65 158.935C624.922 154.164 625.952 149.282 626.436 144.363C627.236 136.221 626.867 127.785 626.834 119.606C626.811 114.086 627.185 108.121 626.429 102.654C626.198 100.983 625.711 99.2694 624.98 97.7497C623.849 95.4 622.178 94.1237 619.689 93.2603C611.729 90.4992 604.828 95.2259 597.98 98.5814C597.233 101.872 597.804 106.655 597.795 110.099C597.763 122.3 597.262 134.751 598.461 146.897C598.79 150.229 599.52 153.386 600.455 156.594C600.622 157.461 600.953 158.094 600.441 158.851L578.944 158.896C580.104 155.131 581.089 151.398 581.535 147.474C582.529 138.728 582.161 130.113 582.136 121.343C582.12 115.351 582.603 108.92 581.636 103C581.391 101.504 581.228 99.7518 580.571 98.3669C579.256 95.5938 576.96 93.9274 574.089 92.9445C567.344 90.6356 559.095 95.5142 553.167 98.375C552.846 100.059 553.087 102.143 553.107 103.876L553.217 114.59C553.291 124.756 552.592 135.391 553.58 145.503C554.024 150.058 554.997 154.553 556.347 158.922L534.328 158.948C535.037 154.026 536.134 149.249 536.618 144.273C537.397 136.276 537.336 128.173 537.318 120.144C537.287 106.328 537.02 92.8719 534.204 79.2883L553.398 79.3229L553.35 94.1725C557.978 88.8891 562.255 82.4173 568.854 79.4471C570.823 78.5609 573.056 78.1637 575.159 77.7098Z"
      />
      <path
        fill="#99C6D6"
        d="M61.5388 77.7259C67.0266 76.9943 72.3669 78.4977 77.3596 80.6349C78.7837 81.2446 80.5484 82.2471 82.086 82.4343C84.0418 82.6723 86.4166 82.3245 88.3939 82.2057L105.107 80.6555L103.648 93.5002L90.4048 93.103C92.6976 98.1598 93.8429 104.351 93.074 109.874C92.0649 117.123 88.0271 123.107 82.2564 127.461C75.0557 132.893 67.5215 133.08 58.8453 131.891L57.5131 132.98C56.1434 134.317 54.325 136.14 54.3028 138.154C54.6138 138.782 54.9728 139.384 55.5103 139.845C58.2712 142.213 62.7926 142.36 66.2153 142.552C70.5717 142.797 74.9392 142.947 79.296 142.658C84.6449 142.304 90.661 142.82 94.8652 146.548C97.9179 149.254 99.5261 153.053 99.759 157.071C100.2 164.681 98.3853 169.694 93.3228 175.381C89.5845 179.107 84.0318 181.576 78.9091 182.579C72.9111 183.753 66.7329 183.825 60.6389 183.757C53.8134 183.681 47.0035 184.086 41.1017 180.079C38.9519 178.62 37.1871 176.305 36.7168 173.716C35.621 167.682 44.2771 160.977 48.4785 157.568C49.4252 156.8 51.1033 155.899 51.7692 154.946C48.8313 154.517 45.5106 154.282 42.686 153.338C40.4328 152.586 38.1862 150.879 37.1452 148.712C36.3654 147.088 36.4702 145.336 37.0651 143.671C39.0644 138.075 47.9077 132.912 53.1184 130.423L51.1434 129.125C44.5222 124.747 39.6828 120.166 38.0489 112.061C36.4398 104.079 37.9717 96.156 42.4795 89.3852C46.8277 82.8544 54.0474 79.231 61.5388 77.7259ZM61.8283 89.4766C58.16 90.5996 55.6439 91.9605 53.7378 95.4978C51.6181 99.4315 51.8251 105.712 53.1016 109.895C54.3025 113.83 56.4726 117.527 60.2098 119.531C62.8461 120.945 65.8894 121.784 68.8166 121.112C72.5055 119.765 75.4691 117.784 77.181 114.096C79.2924 109.548 78.9475 103.838 77.2381 99.2086C75.9614 95.7515 73.4135 91.8708 69.9591 90.325C67.4638 89.2083 64.4905 89.1408 61.8283 89.4766ZM57.2835 155.334C55.1441 158.155 52.4968 161.537 53.0534 165.307C53.2851 166.876 54.5574 168.469 55.8184 169.368C60.1208 172.438 68.0693 172.637 73.0804 171.78L77.6569 170.661C79.9745 169.397 82.4253 167.846 83.2285 165.18C83.7538 163.437 83.7555 161.394 82.8579 159.776C81.7361 157.754 80.1869 156.533 77.9503 155.92C75.6718 155.296 73.1451 155.439 70.8009 155.432C66.3278 155.417 61.7408 155.638 57.2835 155.334Z"
      />
    </svg>
  );
};

export default BeLogoFooter;