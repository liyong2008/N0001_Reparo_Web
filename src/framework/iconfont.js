;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-rili" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M877.129978 959.335235 166.199253 959.335235c-33.728172 0-61.070914-27.343765-61.070914-61.078077L105.128339 210.511481c0-33.730219 27.343765-61.07603 61.070914-61.07603l69.534679 1.410116 0 29.172413c0 50.595328 41.016159 99.655697 91.609441 99.655697 50.597375 0 91.614557-53.286624 91.614557-103.879905l0-26.358321 221.277686 0 0 26.358321c0 50.592258 41.016159 103.879905 91.609441 103.879905 50.595328 0 91.609441-53.286624 91.609441-103.879905l0-26.358321 53.676503 0c33.732266 0 61.070914 23.163559 61.070914 56.890708l0 691.930999C938.200892 931.992493 910.862243 959.335235 877.129978 959.335235zM864.390839 345.787444 178.369434 345.787444l0 540.464285L864.390839 886.251729 864.390839 345.787444zM349.638145 517.024433l-98.101295 0 0-97.662297 98.101295 0L349.638145 517.024433zM349.638145 664.122653l-98.101295 0 0-96.764857 98.101295 0L349.638145 664.122653zM349.638145 811.381531l-98.101295 0 0-97.54257 98.101295 0L349.638145 811.381531zM496.529657 517.024433l-97.42182 0 0-97.662297 97.42182 0L496.529657 517.024433zM496.529657 664.122653l-97.42182 0 0-96.764857 97.42182 0L496.529657 664.122653zM496.529657 811.381531l-97.42182 0 0-97.54257 97.42182 0L496.529657 811.381531zM644.562155 517.024433l-98.912777 0 0-97.662297 98.912777 0L644.562155 517.024433zM644.562155 664.122653l-98.912777 0 0-96.764857 98.912777 0L644.562155 664.122653zM644.562155 811.381531l-98.912777 0 0-97.54257 98.912777 0L644.562155 811.381531zM791.632745 517.024433l-98.30698 0 0-97.662297 98.30698 0L791.632745 517.024433zM791.632745 664.122653l-98.30698 0 0-96.764857 98.30698 0L791.632745 664.122653zM791.632745 811.381531l-98.30698 0 0-97.54257 98.30698 0L791.632745 811.381531zM730.892359 237.065254c-33.203216 0-60.122309-26.919093-60.122309-60.122309l0-50.909483c0-33.203216 26.919093-60.120262 60.122309-60.120262 33.200146 0 60.117193 26.917046 60.117193 60.120262l0 50.909483C791.010575 210.146161 764.093529 237.065254 730.892359 237.065254zM326.388629 237.065254c-33.200146 0-60.117193-26.919093-60.117193-60.122309l0-50.909483c0-33.203216 26.917046-60.120262 60.117193-60.120262 33.205263 0 60.120262 26.917046 60.120262 60.120262l0 50.909483C386.508891 210.146161 359.593891 237.065254 326.388629 237.065254z" fill="#758388" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuangtai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.324388 62.492286c-247.210311 0-447.614597 200.403263-447.614597 447.614597s200.404286 447.614597 447.614597 447.614597 447.614597-200.403263 447.614597-447.614597S759.534699 62.492286 512.324388 62.492286zM512.324388 845.817832c-185.407734 0-335.710948-150.303214-335.710948-335.710948s150.303214-335.710948 335.710948-335.710948 335.710948 150.303214 335.710948 335.710948S697.732122 845.817832 512.324388 845.817832z"  ></path>' +
    '' +
    '<path d="M512.324388 510.106884m-223.807299 0a218.71 218.71 0 1 0 447.614597 0 218.71 218.71 0 1 0-447.614597 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qita" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.679419 429.244204c0 11.984962-9.716292 21.700231-21.700231 21.700231L577.254701 450.944436c-11.983939 0-21.700231-9.715269-21.700231-21.700231L555.55447 143.518694c0-11.983939 9.716292-21.700231 21.700231-21.700231l285.724487 0c11.983939 0 21.700231 9.716292 21.700231 21.700231L884.679419 429.244204 884.679419 429.244204z" fill="#758388" ></path>' +
    '' +
    '<path d="M884.679419 834.622862c0 11.984962-9.716292 21.701255-21.700231 21.701255L577.254701 856.324116c-11.983939 0-21.700231-9.716292-21.700231-21.701255L555.55447 548.898375c0-11.984962 9.716292-21.700231 21.700231-21.700231l285.724487 0c11.983939 0 21.700231 9.715269 21.700231 21.700231L884.679419 834.622862 884.679419 834.622862z" fill="#758388" ></path>' +
    '' +
    '<path d="M499.042385 834.622862c0 11.984962-9.717316 21.701255-21.699208 21.701255L191.617667 856.324116c-11.984962 0-21.702278-9.716292-21.702278-21.701255L169.915389 548.898375c0-11.984962 9.717316-21.700231 21.702278-21.700231l285.72551 0c11.981892 0 21.699208 9.715269 21.699208 21.700231L499.042385 834.622862z" fill="#758388" ></path>' +
    '' +
    '<path d="M334.479399 286.381449m-169.083953 0a165.233 165.233 0 1 0 338.167906 0 165.233 165.233 0 1 0-338.167906 0Z" fill="#758388" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M717.213 512.027l-325.089 325.092v-650.19l325.089 325.092z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M317 962c-20.447 0-39.487-8.097-53.616-22.793-28.435-29.532-27.562-76.733 1.959-105.209l336.316-324.161-337.558-319.337c-29.795-28.216-31.113-75.414-2.934-105.233 14.029-14.793 33.756-23.268 54.112-23.268 19.092 0 37.245 7.218 51.123 20.336l393.942 372.603c23.225 21.93 29.387 56.446 15.33 85.87-1.012 2.207-2.19 3.903-2.889 4.869-0.321 0.583-0.649 1.192-0.968 1.809-1.877 3.55-4.366 8.266-8.657 12.758l-0.283 0.291c-0.262 0.27-0.524 0.514-0.764 0.741-0.858 1.222-1.797 2.356-2.816 3.377l-390.638 376.508c-13.975 13.439-32.313 20.837-51.653 20.837v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinru" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.205455 61.98268c-247.693312 0-448.488501 200.795189-448.488501 448.482361 0 247.693312 200.795189 448.492594 448.488501 448.492594 247.689219 0 448.482361-200.799282 448.482361-448.492594C961.686792 262.778892 760.894673 61.98268 513.205455 61.98268zM696.396707 535.096021 537.831318 693.663456c-10.94426 10.946306-28.694529 10.946306-39.639812 0-10.946306-10.94733-10.946306-28.697599 0-39.643905l115.52206-115.521037L316.989561 538.498514c-15.481599 0-28.030403-12.552897-28.030403-28.033473 0-15.477506 12.548804-28.027333 28.030403-28.027333l296.724005 0-115.52206-115.521037c-10.946306-10.946306-10.946306-28.697599 0-39.643905s28.695552-10.946306 39.639812 0l158.565389 158.567435c6.722098 6.722098 8.807596 15.925714 7.274684 24.623817C705.204303 519.169283 703.118805 528.373922 696.396707 535.096021z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M886.528 908.032c-28.096 28.096-73.856 28.096-102.016 0L138.304 261.824c-28.096-28.16-28.16-73.856 0-102.016 28.032-28.16 73.792-28.16 102.08 0l646.144 646.144C914.624 834.24 914.752 879.872 886.528 908.032L886.528 908.032zM885.76 261.504 239.616 907.648c-28.224 28.224-73.92 28.224-102.08 0-28.16-28.096-28.16-73.728 0.064-102.016L783.744 159.552c28.224-28.16 73.984-28.16 102.016-0.064C913.984 187.648 913.856 233.344 885.76 261.504L885.76 261.504z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-danzi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M651 95.2v185.1h183.4L651 95.2z m-30.9 216.1V79.7H187.7v864.7h648.5V311.3H620.1z m61.8 525H311.3v-92.6h370.6v92.6z m0-185.3H311.3v-92.6h370.6V651z m0-185.3H311.3V373h370.6v92.7z" fill="#5C5C5C" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home_G" viewBox="0 0 1046 1024">' +
    '' +
    '<path d="M995.328 443.392L606.72 39.424c-24.064-25.088-56.32-38.912-91.136-38.912-34.304 0.512-66.56 13.824-90.624 38.912L36.352 443.392c-39.936 41.472-34.816 77.824-28.16 92.672 4.608 10.752 20.48 39.936 66.56 39.936h56.832v310.784c0 70.656 50.688 136.704 122.88 136.704H419.84v-329.216c0-35.328-5.12-54.784 30.72-54.784h131.072c35.84 0 30.72 19.456 30.72 54.784V1024h165.376c72.192 0 122.88-66.56 122.88-136.704v-310.784H957.44c46.08 0 61.952-29.184 66.56-39.936 6.144-15.36 11.264-51.2-28.672-93.184z" fill="#39CAA6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cc_G" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 416.768H0C69.632 198.144 269.824 39.936 512 39.936c242.176 4.608 442.368 162.816 512 376.832zM190.976 924.16h651.776v51.2H190.976v-51.2z m0-93.184h651.776v51.2H190.976v-51.2z m0-83.456h651.776v51.2H190.976v-51.2z m0-93.184h651.776v51.2H190.976v-51.2zM125.44 1003.52H0V458.752h1024V1003.52h-125.44v-404.992h-773.12V1003.52z" fill="#39CAA6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cc_B" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 416.768H0C69.632 198.144 269.824 39.936 512 39.936c242.176 4.608 442.368 162.816 512 376.832zM190.976 924.16h651.776v51.2H190.976v-51.2z m0-93.184h651.776v51.2H190.976v-51.2z m0-83.456h651.776v51.2H190.976v-51.2z m0-93.184h651.776v51.2H190.976v-51.2zM125.44 1003.52H0V458.752h1024V1003.52h-125.44v-404.992h-773.12V1003.52z" fill="#0096D7" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cc_H" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 416.768H0C69.632 198.144 269.824 39.936 512 39.936c242.176 4.608 442.368 162.816 512 376.832zM190.976 924.16h651.776v51.2H190.976v-51.2z m0-93.184h651.776v51.2H190.976v-51.2z m0-83.456h651.776v51.2H190.976v-51.2z m0-93.184h651.776v51.2H190.976v-51.2zM125.44 1003.52H0V458.752h1024V1003.52h-125.44v-404.992h-773.12V1003.52z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-locate" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C307.2 0 139.636364 167.563636 139.636364 372.363636s260.654545 558.545455 260.654545 558.545455c55.854545 83.781818 158.254545 83.781818 214.109091 0 0 0 260.654545-353.745455 260.654545-558.545455S716.8 0 512 0z m0 512c-83.781818 0-148.945455-65.163636-148.945455-139.636364S428.218182 223.418182 512 223.418182s139.636364 65.163636 139.636364 148.945454S586.472727 512 512 512z" fill="#90A4AE" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-order_G" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M878.592 60.928h-86.528v112.128H226.816V60.928H140.288c-46.08 0-86.528 35.84-86.528 86.528V936.96c0 46.08 35.84 86.528 86.528 86.528h733.696c46.08 0 86.528-35.84 86.528-86.528V147.968c5.12-46.08-35.84-87.04-81.92-87.04zM226.816 570.368h453.632v55.808H226.816v-55.808z m570.368 224.256H231.936v-55.808h565.248v55.808z m0-335.872H231.936v-56.32h565.248v56.32zM313.344 117.248h397.312c15.36 0 30.72-10.24 30.72-30.72V30.72c0-15.36-10.24-30.72-30.72-30.72H313.344c-15.36 0-30.72 10.24-30.72 30.72v55.808c5.12 20.48 15.36 30.72 30.72 30.72z" fill="#39CAA6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wl_B" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.4 138.24c-10.24-10.24-25.6-15.36-40.96-15.36H148.48c-30.72 0-51.2 25.6-51.2 51.2v51.2L30.72 230.4c-15.36 0-30.72 15.36-30.72 35.84v5.12c0 15.36 15.36 30.72 35.84 35.84l373.76 30.72c0 20.48-40.96 40.96-61.44 40.96l-250.88 20.48h-35.84c-10.24 0-20.48 10.24-25.6 20.48 0 5.12-5.12 10.24-5.12 15.36v5.12c0 20.48 15.36 35.84 35.84 35.84l302.08 25.6c-10.24 20.48-30.72 35.84-51.2 35.84l-215.04 15.36v194.56c0 30.72 25.6 51.2 51.2 51.2h20.48c10.24-71.68 81.92-133.12 163.84-133.12s153.6 61.44 168.96 143.36h107.52c15.36-76.8 87.04-143.36 168.96-143.36s153.6 61.44 168.96 143.36h15.36c25.6 0 51.2-20.48 51.2-46.08 35.84-384-138.24-614.4-148.48-624.64z m-189.44 291.84V225.28h122.88c20.48 30.72 56.32 102.4 87.04 204.8h-209.92z m-343.04 307.2c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z m445.44 0c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z" fill="#0096D7" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-order_H" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M878.592 60.928h-86.528v112.128H226.816V60.928H140.288c-46.08 0-86.528 35.84-86.528 86.528V936.96c0 46.08 35.84 86.528 86.528 86.528h733.696c46.08 0 86.528-35.84 86.528-86.528V147.968c5.12-46.08-35.84-87.04-81.92-87.04zM226.816 570.368h453.632v55.808H226.816v-55.808z m570.368 224.256H231.936v-55.808h565.248v55.808z m0-335.872H231.936v-56.32h565.248v56.32zM313.344 117.248h397.312c15.36 0 30.72-10.24 30.72-30.72V30.72c0-15.36-10.24-30.72-30.72-30.72H313.344c-15.36 0-30.72 10.24-30.72 30.72v55.808c5.12 20.48 15.36 30.72 30.72 30.72z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-order_B" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M878.592 60.928h-86.528v112.128H226.816V60.928H140.288c-46.08 0-86.528 35.84-86.528 86.528V936.96c0 46.08 35.84 86.528 86.528 86.528h733.696c46.08 0 86.528-35.84 86.528-86.528V147.968c5.12-46.08-35.84-87.04-81.92-87.04zM226.816 570.368h453.632v55.808H226.816v-55.808z m570.368 224.256H231.936v-55.808h565.248v55.808z m0-335.872H231.936v-56.32h565.248v56.32zM313.344 117.248h397.312c15.36 0 30.72-10.24 30.72-30.72V30.72c0-15.36-10.24-30.72-30.72-30.72H313.344c-15.36 0-30.72 10.24-30.72 30.72v55.808c5.12 20.48 15.36 30.72 30.72 30.72z" fill="#0096D7" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wl_G" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.4 138.24c-10.24-10.24-25.6-15.36-40.96-15.36H148.48c-30.72 0-51.2 25.6-51.2 51.2v51.2L30.72 230.4c-15.36 0-30.72 15.36-30.72 35.84v5.12c0 15.36 15.36 30.72 35.84 35.84l373.76 30.72c0 20.48-40.96 40.96-61.44 40.96l-250.88 20.48h-35.84c-10.24 0-20.48 10.24-25.6 20.48 0 5.12-5.12 10.24-5.12 15.36v5.12c0 20.48 15.36 35.84 35.84 35.84l302.08 25.6c-10.24 20.48-30.72 35.84-51.2 35.84l-215.04 15.36v194.56c0 30.72 25.6 51.2 51.2 51.2h20.48c10.24-71.68 81.92-133.12 163.84-133.12s153.6 61.44 168.96 143.36h107.52c15.36-76.8 87.04-143.36 168.96-143.36s153.6 61.44 168.96 143.36h15.36c25.6 0 51.2-20.48 51.2-46.08 35.84-384-138.24-614.4-148.48-624.64z m-189.44 291.84V225.28h122.88c20.48 30.72 56.32 102.4 87.04 204.8h-209.92z m-343.04 307.2c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z m445.44 0c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z" fill="#39CAA6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wl_H" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.4 138.24c-10.24-10.24-25.6-15.36-40.96-15.36H148.48c-30.72 0-51.2 25.6-51.2 51.2v51.2L30.72 230.4c-15.36 0-30.72 15.36-30.72 35.84v5.12c0 15.36 15.36 30.72 35.84 35.84l373.76 30.72c0 20.48-40.96 40.96-61.44 40.96l-250.88 20.48h-35.84c-10.24 0-20.48 10.24-25.6 20.48 0 5.12-5.12 10.24-5.12 15.36v5.12c0 20.48 15.36 35.84 35.84 35.84l302.08 25.6c-10.24 20.48-30.72 35.84-51.2 35.84l-215.04 15.36v194.56c0 30.72 25.6 51.2 51.2 51.2h20.48c10.24-71.68 81.92-133.12 163.84-133.12s153.6 61.44 168.96 143.36h107.52c15.36-76.8 87.04-143.36 168.96-143.36s153.6 61.44 168.96 143.36h15.36c25.6 0 51.2-20.48 51.2-46.08 35.84-384-138.24-614.4-148.48-624.64z m-189.44 291.84V225.28h122.88c20.48 30.72 56.32 102.4 87.04 204.8h-209.92z m-343.04 307.2c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z m445.44 0c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yszk_B" viewBox="0 0 1106 1024">' +
    '' +
    '<path d="M376.32 307.712l119.296 177.152H415.232v31.232h102.4l0.512 44.032H415.232v31.232h102.912v76.8H588.8v-76.8h103.424v-31.232H588.8v-43.52l103.424-0.512v-31.232h-81.408l119.296-177.152h-80.896L552.96 462.848 457.216 307.712H376.32z m231.936 631.296s432.128-376.32 432.128-374.784c0 2.048-121.344 4.096-121.344 4.096h-66.56V104.448c0-20.992-16.896-37.888-37.888-37.888h-522.24c-20.992 0-37.888 16.896-37.888 37.888V568.32H67.584c-2.56 0 432.64 371.2 432.64 371.2s33.28 17.92 53.76 17.92c20.48-0.512 54.272-18.432 54.272-18.432zM187.904 501.248v-66.56-330.24C187.904 46.592 234.496 0 292.352 0h522.24c57.856 0 104.448 46.592 104.448 104.448v396.8h123.904c34.816-0.512 63.488 27.136 64 61.44v1.024c0 15.36-5.632 29.184-14.848 39.936l-439.808 385.024c-28.16 22.528-62.976 34.304-98.816 34.816-35.328 0-69.632-11.776-97.28-34.304l-434.688-378.88-3.072-3.072-3.072-1.536c-9.728-11.776-15.36-25.6-15.36-41.472 0-28.672 19.456-52.736 46.08-59.904l15.36-2.56h59.904l66.56-0.512z" fill="#0096D7" ></path>' +
    '' +
    '<path d="M228.352 51.2h629.76l12.8 465.92 163.84 20.48 17.92 33.28-499.2 422.4L28.672 573.44l194.56-30.72z" fill="#0096D7" ></path>' +
    '' +
    '<path d="M456.192 222.208l97.28 190.464 97.28-190.464h81.92L611.84 440.32h82.432v38.4h-104.448l-0.512 0.512V532.48h104.96v38.4h-104.96V665.6H517.12v-94.208H413.184V532.48h104.448V479.232l-0.512-0.512H413.184V440.32h81.92L374.272 222.208h81.92z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yszk_G" viewBox="0 0 1106 1024">' +
    '' +
    '<path d="M376.32 307.712l119.296 177.152H415.232v31.232h102.4l0.512 44.032H415.232v31.232h102.912v76.8H588.8v-76.8h103.424v-31.232H588.8v-43.52l103.424-0.512v-31.232h-81.408l119.296-177.152h-80.896L552.96 462.848 457.216 307.712H376.32z m231.936 631.296s432.128-376.32 432.128-374.784c0 2.048-121.344 4.096-121.344 4.096h-66.56V104.448c0-20.992-16.896-37.888-37.888-37.888h-522.24c-20.992 0-37.888 16.896-37.888 37.888V568.32H67.584c-2.56 0 432.64 371.2 432.64 371.2s33.28 17.92 53.76 17.92c20.48-0.512 54.272-18.432 54.272-18.432zM187.904 501.248v-66.56-330.24C187.904 46.592 234.496 0 292.352 0h522.24c57.856 0 104.448 46.592 104.448 104.448v396.8h123.904c34.816-0.512 63.488 27.136 64 61.44v1.024c0 15.36-5.632 29.184-14.848 39.936l-439.808 385.024c-28.16 22.528-62.976 34.304-98.816 34.816-35.328 0-69.632-11.776-97.28-34.304l-434.688-378.88-3.072-3.072-3.072-1.536c-9.728-11.776-15.36-25.6-15.36-41.472 0-28.672 19.456-52.736 46.08-59.904l15.36-2.56h59.904l66.56-0.512z" fill="#39CAA6" ></path>' +
    '' +
    '<path d="M228.352 51.2h629.76l12.8 465.92 163.84 20.48 17.92 33.28-499.2 422.4L28.672 573.44l194.56-30.72z" fill="#39CAA6" ></path>' +
    '' +
    '<path d="M456.192 222.208l97.28 190.464 97.28-190.464h81.92L611.84 440.32h82.432v38.4h-104.448l-0.512 0.512V532.48h104.96v38.4h-104.96V665.6H517.12v-94.208H413.184V532.48h104.448V479.232l-0.512-0.512H413.184V440.32h81.92L374.272 222.208h81.92z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yszk_hui" viewBox="0 0 1106 1024">' +
    '' +
    '<path d="M376.32 307.712l119.296 177.152H415.232v31.232h102.4l0.512 44.032H415.232v31.232h102.912v76.8H588.8v-76.8h103.424v-31.232H588.8v-43.52l103.424-0.512v-31.232h-81.408l119.296-177.152h-80.896L552.96 462.848 457.216 307.712H376.32z m231.936 631.296s432.128-376.32 432.128-374.784c0 2.048-121.344 4.096-121.344 4.096h-66.56V104.448c0-20.992-16.896-37.888-37.888-37.888h-522.24c-20.992 0-37.888 16.896-37.888 37.888V568.32H67.584c-2.56 0 432.64 371.2 432.64 371.2s33.28 17.92 53.76 17.92c20.48-0.512 54.272-18.432 54.272-18.432zM187.904 501.248v-66.56-330.24C187.904 46.592 234.496 0 292.352 0h522.24c57.856 0 104.448 46.592 104.448 104.448v396.8h123.904c34.816-0.512 63.488 27.136 64 61.44v1.024c0 15.36-5.632 29.184-14.848 39.936l-439.808 385.024c-28.16 22.528-62.976 34.304-98.816 34.816-35.328 0-69.632-11.776-97.28-34.304l-434.688-378.88-3.072-3.072-3.072-1.536c-9.728-11.776-15.36-25.6-15.36-41.472 0-28.672 19.456-52.736 46.08-59.904l15.36-2.56h59.904l66.56-0.512z" fill="#999999" ></path>' +
    '' +
    '<path d="M228.352 51.2h629.76l12.8 465.92 163.84 20.48 17.92 33.28-499.2 422.4L28.672 573.44l194.56-30.72z" fill="#999999" ></path>' +
    '' +
    '<path d="M456.192 222.208l97.28 190.464 97.28-190.464h81.92L611.84 440.32h82.432v38.4h-104.448l-0.512 0.512V532.48h104.96v38.4h-104.96V665.6H517.12v-94.208H413.184V532.48h104.448V479.232l-0.512-0.512H413.184V440.32h81.92L374.272 222.208h81.92z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-list" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M13.312 126.464h751.104V230.4H13.312zM13.312 438.784h625.664V542.72H13.312zM759.296 486.912l254.464 159.232V322.56zM13.312 751.616h751.104v103.936H13.312z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cc_o" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 5.12C231.936 5.12 5.12 231.936 5.12 512s226.816 506.88 506.88 506.88 506.88-226.816 506.88-506.88-226.816-506.88-506.88-506.88z m152.064 715.776H364.032v-23.552h300.032v23.552z m0-43.008H364.032v-23.552h300.032v23.552z m0-38.4H364.032v-23.552h300.032v23.552z m0-43.008H364.032v-23.552h300.032v23.552z m83.456 137.216h-57.856v-186.368H334.336v186.368H276.48V483.328h471.04v250.368zM276.48 463.872c32.256-100.864 124.416-173.568 235.52-173.568 111.104 2.048 203.264 75.264 235.52 173.568H276.48z" fill="#00CBD2" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-order_o" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M394.24 609.28h242.176v23.552H394.24zM392.192 537.088h194.56v24.064h-194.56zM394.24 464.896h242.176v24.064H394.24z" fill="#39CAA6" ></path>' +
    '' +
    '<path d="M512 5.12C231.936 5.12 5.12 231.936 5.12 512s226.816 506.88 506.88 506.88 506.88-226.816 506.88-506.88-226.816-506.88-506.88-506.88zM416.256 305.152c0-8.704 6.656-13.312 13.312-13.312h169.984c8.704 0 13.312 6.656 13.312 13.312v24.064c0 8.704-6.656 13.312-13.312 13.312H429.568c-6.656 0-11.264-4.096-13.312-13.312v-24.064z m290.304 50.688v337.92c0 21.504-16.896 36.864-36.864 36.864H355.328c-21.504 0-36.864-16.896-36.864-36.864V355.328c0-21.504 16.896-36.864 36.864-36.864h36.864v48.128H634.88v-48.128h36.864c19.456 0 36.864 17.92 34.816 37.376z" fill="#39CAA6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yszk_o" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 5.12C231.936 5.12 5.12 231.936 5.12 512s226.816 506.88 506.88 506.88 506.88-226.816 506.88-506.88-226.816-506.88-506.88-506.88z m266.24 542.208c0 7.168-2.56 13.824-7.168 19.456l-211.456 185.344c-13.312 10.752-30.208 16.384-47.616 16.896-16.896 0-33.28-5.632-46.592-16.384L256 569.856l-1.536-1.536-1.536-0.512c-4.608-5.632-7.168-12.288-7.168-19.968 0-13.824 9.216-25.6 22.016-28.672l7.168-1.024h28.672l32.768-1.024V326.144c0-27.648 22.528-50.176 50.176-50.176h251.392c27.648 0 50.176 22.528 50.176 50.176V517.12H747.52c16.896 0 30.72 12.8 30.72 29.696v0.512z" fill="#00CBD2" ></path>' +
    '' +
    '<path d="M445.44 550.912h49.152v8.704H445.44zM529.408 550.4h49.152v9.216h-49.152zM529.408 523.776h49.152v-14.848h-38.912l1.536-2.56h-11.776zM448.512 423.936h-21.504l43.008 64h13.824zM495.104 595.968h33.792v0.512h-33.792zM553.984 487.936l43.008-64h-21.504l-35.328 64zM482.816 506.368l1.536 2.56H445.44v14.848h49.152v-17.408z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M579.584 506.368v-18.432h-25.6l-12.8 18.432zM494.592 544.768v-12.8h-50.176v18.944h1.024v-6.144zM444.416 487.936v18.432h38.4l-12.8-18.432zM558.592 382.976L512 474.624l-46.592-91.648h-39.424l22.528 40.96H465.92l46.08 74.752 46.08-74.752h17.408l22.528-40.96zM528.896 544.768h49.664v5.632h1.536v-18.432h-50.688v-8.192h-0.512zM494.592 559.616h0.512v36.352h-0.512zM528.896 559.616h0.512v36.352h-0.512z" fill="#00CBD2" ></path>' +
    '' +
    '<path d="M512 498.688l-46.08-74.752h-17.408l35.328 64h-13.824l12.8 18.432h11.776v38.4H445.44v6.144h49.152v8.704h0.512v36.352h33.792v-36.352h0.512v-9.216h49.152v-5.632h-49.664v-20.992h0.512v-17.408h11.776l12.8-18.432h-13.824l35.328-64H558.08z" fill="#00CBD2" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wl_o" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M672.768 353.28h-67.584v112.64h115.2c-16.384-56.32-36.352-95.744-47.616-112.64z" fill="#39CAA6" ></path>' +
    '' +
    '<path d="M1018.88 512c0-280.064-226.816-506.88-506.88-506.88S5.12 231.936 5.12 512s226.816 506.88 506.88 506.88 506.88-226.816 506.88-506.88z m-357.376 235.52c-31.232 0-56.32-25.088-56.32-56.32s25.088-56.32 56.32-56.32c30.72 0 56.32 25.088 56.32 56.32s-25.6 56.32-56.32 56.32z m-245.248 0c-31.232 0-56.32-25.088-56.32-56.32s25.088-56.32 56.32-56.32 56.32 25.088 56.32 56.32-25.6 56.32-56.32 56.32z m0-152.064c-45.056 0-84.48 33.792-90.112 73.216h-11.264c-13.824 0-28.16-11.264-28.16-28.16v-107.008l117.76-8.192c11.264 0 22.528-8.704 28.16-19.968l-165.888-14.336c-11.264 0-19.456-8.192-19.456-19.456v-2.56c0-3.072 2.56-6.144 2.56-8.704 3.072-5.632 8.704-11.264 14.336-11.264h19.456l138.24-11.264c11.264 0 33.792-11.264 33.792-22.528l-204.8-16.896c-11.264-3.072-19.968-11.264-19.968-19.968v-2.56c0-11.264 8.192-19.456 16.896-19.456l36.352-3.072v-28.16c0-13.824 11.264-28.16 28.16-28.16h374.272c8.192 0 16.896 3.072 22.528 8.704 5.632 5.632 101.376 132.096 81.408 343.552 0 13.824-13.824 25.088-28.16 25.088h-8.192c-8.192-45.056-47.616-78.848-92.672-78.848-45.568 0-84.48 36.864-93.184 78.848H509.44c-8.704-45.056-48.128-78.848-93.184-78.848z" fill="#39CAA6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M576 706.56v-52.736c70.656-39.936 128-138.752 128-237.568 0-159.232 0-288.256-192-288.256S320 257.024 320 416.256c0 98.816 57.344 198.144 128 237.568V706.56c-217.088 17.92-384 124.416-384 253.44h896c0-129.024-166.912-235.52-384-253.44z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-news" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M594.944 144.384c0-44.032-37.376-79.36-82.944-79.36-45.568 0-82.944 35.84-82.944 79.36 0 4.608 0.512 8.704 1.024 13.312-114.688 38.4-208.384 155.648-208.384 294.912v109.568s0 157.696-40.448 158.72c-24.064 0-42.496 17.92-42.496 39.936s18.432 39.936 41.472 39.936h663.552c23.04 0 41.472-17.92 41.472-39.936s-18.432-39.936-41.472-39.936c-41.472 0-41.472-157.696-41.472-157.696V452.096c0-139.264-88.064-256.512-208.384-294.912 0.512-4.096 1.024-8.192 1.024-12.8z m41.472 695.296c0 66.048-55.296 119.296-124.416 119.296-68.608 0-124.416-53.248-124.416-119.296h248.832z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)