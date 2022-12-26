import { useContext, MouseEventHandler } from "react";
import MyThemeContext from "../store/myThemeContext";

export default function Lightbulb(props: { onClick: MouseEventHandler<SVGSVGElement> | undefined; darkOn: any }) {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);
  return (
    <>
      <svg
        onClick={props.onClick}
        version="1.1"
        className="dark:fill-yellow-100 fill-black-300 cursor-pointer stroke-none bg-transparent text-slate-800 "
        // put ternary function here
        // fill="white"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="20px"
        height={80}
        width={80}
        y="20px"
        viewBox="0 0 1059.39 1657.448"
        enable-background="new 0 0 1059.39 1657.448"
        xmlSpace="preserve"
      >
        <g>
          {!props.darkOn && (
            <>
              <path
                opacity="0.82"
                enable-background="new    "
                d="M569.137,28.724c0.739,0,2.206,0,2.944,0
        c8.277,44.865,9.83,90.641,9.408,136.168c-0.777-0.019-2.34-0.058-3.117-0.077C578.708,114.46,577.672,80.487,569.137,28.724z"
              />

              <path
                opacity="0.82"
                enable-background="new    "
                d="M376.892,54.983c0.959-0.393,1.928-0.786,2.906-1.189
        c7.804,23.643,30.333,85.474,31.333,104.634c-0.671,0.125-2.033,0.393-2.705,0.518C403.616,130.87,393.165,103.373,376.892,54.983z
        "
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M773.428,109.113c0.556-2.052,4.21,0.182,2.743,1.4
        c-18.059,27.957-37.586,54.955-54.916,83.381c-0.834-0.748-1.669-1.487-2.494-2.215
        C736.273,163.694,755.263,136.667,773.428,109.113z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M199.416,144.953c0.873-0.614,1.736-1.218,2.609-1.822
        c14.392,20.433,47.186,54.288,65.322,72.304c-0.834,0.719-1.659,1.429-2.474,2.148
        C247.655,200.247,213.396,164.973,199.416,144.953z"
              />
            </>
          )}

          <path
            opacity="0.82"
            enable-background="new    "
            d="M476.491,211.541c158.593-25.388,274.284,60.457,345.734,205.729
        c28.299,56.554,42.392,109.344,31.525,173.793c-16.769,101.974-90.305,186.894-137.933,264.29
        c-26.13,43.19-27.282,56.998-33.98,77.205c-15.677,48.588-36.291,103.844-75.44,136.437c-4.65,4.682-16.25,23.034-41.029,33.088
        c0.633,5.371-0.412,10.981-3.971,15.201c33.58,5.053,60.861,15.924,63.73,18.692c-1.899,2.82-5.793,3.011-8.67,4.402
        c2.148,1.141,4.325,2.254,6.474,3.424c-2.32,3.426-15.282,8.086-22.423,11.595c9.34,1.647,25.726,5.824,23.133,15.019
        c-1.218,5.304-6.522,7.922-10.866,10.348c5.956,2.791,12.19,5.15,17.637,8.91c-0.284,3.758-26.845,12.323-38.698,14.885
        c7.078,2.474,14.53,4.757,20.256,9.85c1.496,1.429,3.357,2.81,3.923,4.92c-2.839,2.676-6.368,4.421-9.763,6.263
        c4.335,2.666,8.91,5.15,12.314,9.034c-8.306,5.332-17.647,8.795-26.796,12.382c9.888,2.455,19.91,4.536,29.539,7.979
        c-0.949,1.266-2.091,2.417-3.654,2.906c-55.127,22.304-123.264,9.824-148.531,10.77c8.958,0.623,17.752,2.964,26.768,2.858
        c11.25,0.403,22.49,1.285,33.663,2.647c3.079,0.355,4.268,4.21,7.471,4.277c19.009,3.654,39.082,9.217,52.95,23.574
        c-9.003,6.302-39.23,7.16-50.265,7.174c2.534,102.381-25.191,280.392-37.624,318.075c-2.1,1.41-4.862,2.014-7.193,0.815
        c19.16-73.808,41.887-243.467,37.106-319.13c-10.552-0.31-58.624-3.126-73.608-8.881c-10.629-4.046-17.776-13.817-9.974-19.862
        c5.85-4.709,13.494-5.985,20.62-7.596c-9.514-1.276-18.97-3.069-28.225-5.601c3.251-4.373,9.236-3.107,13.926-2.983
        c51.236,1.28,105.804,11.018,156.184-7.088c-9.092-2.82-18.357-5.169-27.727-6.79c-8.879,1.871-68.379,22.493-152.751,2.148
        c-1.4-0.528-3.453-0.326-3.923-2.072c2.8-2.311,6.512-2.628,9.955-3.194c7.931-1.218,15.863-2.57,23.871-3.213
        c-14.846-2.427-30.115-5.735-42.937-13.935c13.635-10.153,137.756-23.363,183.191-6.637c2.762,1.17,4.815-1.937,6.905-3.261
        c-3.328-4.92-9.236-7.049-14.328-9.639c-4.287-1.544-8.622-4.489-13.341-3.28c-33.368,6.076-104.832,11.337-148.396-3.242
        c-0.29-6.548,53.736-12.545,75.996-10.061c23.075,1.208,46.285,2.331,68.976,7.011c3.529,0.537,7.068,2.311,10.674,1.314
        c11.288-2.618,22.644-5.457,33.251-10.195c0.057-0.211,0.182-0.652,0.24-0.873c-5.131-2.877-10.483-5.342-16.103-7.097
        c-44.482,13.75-158.565,10.601-189.492-0.057c3.501-4.361,22.758-9.883,29.098-11.096c-3.846-2.532-7.644-5.198-10.713-8.66
        c2.407-2.82,5.822-4.335,9.015-6.033c-7.471-2.743-15.383-5.217-21.426-10.626c3.506-2.156,1.915-1.98,29.856-7.318
        c-12.161-0.499-24.437-2.762-35.495-7.989c-1.496-0.441-1.084-2.494,0.345-2.705c40.082-22.176,95.654-18.941,140.868-12.967
        c2.196-3.529,3.098-7.749,2.331-11.854c-20.793,6.57-43.58,5.371-63.979-2.033c-6.924-2.331-13.35-5.812-19.862-9.054
        c-42.879-16.315-71.843-65.432-101.45-128.716c-6.797-15.602-27.82-39.581-70.894-155.561
        C273.927,735.562,192.47,598.626,187.62,510.559c-3.595-58.59,27.378-93.213,29.952-102.649
        C251.579,294.172,359.499,230.382,476.491,211.541 M504.438,214.16c-61.218,4.974-136.69,30.017-186.001,65.312
        c-39.542,28.235-71.853,67.422-89.107,113.064c20.881-28.487,30.534-39.971,65.284-60.191c3.357-2.043,7.097-3.529,10.041-6.196
        c79.49-72.141,216.766-101.334,321.585-67.758c73.644,23.44,96.915,65.737,113.208,76.716
        c21.119,16.199,37.26,38.391,47.368,62.934c4.428,11.99,57.244,80.099,53.506,179.585c-1.601,48.201-18.552,95.263-25.195,107.905
        c0.182,0.048,0.547,0.144,0.729,0.192c7.022-20.891,65.05-114.171,15.681-233.763C769.718,306.635,663.022,200.854,504.438,214.16
         M503.556,251.621c-62.657,5.181-128.39,27.406-176.574,64.171c80.34-36.18,184.832-56.557,269.594-32.071
        c6.713,1.793,13.11,4.862,20.112,5.438c33.404,5.121,66.799,13.437,96.875,29.252C661.333,263.46,577.259,244.463,503.556,251.621
         M424.864,289.494c-2.551,0.834-5.438,0.125-7.807,1.506c-13.321,3.779-26.787,7.135-39.888,11.662
        c-35.303,11.685-67.721,27.495-71.69,30.968c-26.192,24.514-46.831,56.057-54.216,91.495
        c-28.107,140.081-14.192,196.224,26.585,251.295c-51.007-163.427-38.08-334.607,126.271-381.478
        c4.728-1.237,9.38-2.964,14.281-3.405c1.16-0.422,2.321-0.854,3.549-1.113c67.815-15.122,152.204-5.524,152.204-5.524
        c0.067-0.997-1.276-1.496-2.11-1.429c-6.579-0.163-12.986-1.861-19.527-2.417C509.895,276.269,466.612,280.124,424.864,289.494
         M464.368,289.897c-168.317,15.926-228.277,133.428-200.426,303.267c5.611,33.097,13.849,65.811,25.06,97.451
        c6.8,9.37,14.597,18.021,21.79,27.103c-22.285-68.745-44.825-125.34-17.273-210.947c33.067-102.47,124.361-183.355,229.169-187.996
        c73.76-2.626,143.145,20.782,196.542,74.673c-7.826-14.079-15.873-28.158-26.23-40.569c-21.665-26.863-51.147-47.09-83.592-58.618
        C567.77,287.859,499.677,286.129,464.368,289.897 M634.123,298.097c25.431,13.901,49.115,29.885,71.508,61.371
        c15.821,22.451,28.994,52.088,34.526,58.455c49.235,63.859,74.897,160.516,52.25,256.579c10.032-27.554,17.609-56.652,16.055-86.22
        c-5.497-75.655-6.276-133.993-25.185-182.923c-14.99-24.255-32.915-46.601-51.828-67.902
        C725.668,330.758,694.381,310.531,634.123,298.097 M432.94,348.918c-101.181,51.72-162.311,171.6-142.393,277.784
        c4.57,25.944,29.682,102.607,32.944,106.898c15.422,19.546,29.721,40.003,42.4,61.428c4.427,7.594,17.08,21.443,35.821,68.621
        c19.521,49.44,32.262,101.228,49.977,137.943c8.251,16.098,16.023,29.049,40.281,38.583
        c25.745-93.576,29.578-221.212-20.409-304.811c-7.816,3.232-16.218,5.073-24.658,5.409c-16.167,0.704-48.539-9.352-58.35-26.135
        c-8.187-13.382,2.64-31.187,24.84-32.867c16.208-1.362,32.695,6.522,42.218,19.632c6.781,8.306,13.015,17.052,18.529,26.25
        c18.098-8.267,32.896-22.74,43.609-39.331c-38.852-44.808-28.7-119.977-5.63-118.598c17.341,0.316,27.715,39.308,28.676,57.87
        c1.252,34.431-14.406,56.561-15.268,60.277c14.367,14.981,34.277,23.986,54.724,26.71c5.879-8.21,12.286-16.16,20.169-22.557
        c50.846-42.355,115.961-2.184,68.372,19.22c-21.089,9.091-60.54,12.274-80.936,10.272c-1.889,0.057-4.69-1.093-5.448,1.4
        c-52.267,95.334-33.656,212.836-13.043,319.59c8.737-3.05,17.119-7.26,24.495-12.861c5.698-4.089,24.018-62.957,26.25-69.81
        c18.789-58.862,36.123-106.759,71.307-169.208c67.263-122.148,136.043-188.097,40.492-373.288
        c-40.615-52.795-104.091-87.174-178.492-92.08C512.063,321.489,469.844,329.967,432.94,348.918 M250.592,374.851
        c-31.869,39.425-29.023,40.99-30.642,46.812c-27.733,108.854,24.965,212.788,37.365,244.984
        c40.962,104.849,20.709,77.643,118.522,288.996c10.425,17.973,22.816,34.785,36.387,50.504
        c-4.565-19.415-6.17-15.786-15.374-52.451c-18.237-74.419-82.368-170.64-111.722-255.63
        c-5.096-15.421-48.578-47.059-53.938-131.843c-2.522-46.774,4.651-93.404,13.571-139.18c5.985-31.064,21.493-59.865,42.583-83.285
        C273.85,352.467,260.49,362.029,250.592,374.851 M797.136,428.204c12.527,59.296,11.214,78.203,16.678,151.523
        c6.594,74.072-38.815,144.365-47.886,164.595c-12.919,28.197-27.87,55.405-42.822,82.566
        C821.748,690.027,875.993,579.214,797.136,428.204 M193.374,505.783c1.785,64.178,45.66,151.636,84.561,234.751
        c-37.812-108.52-53.669-126.192-65.888-191.593c-7.212-38.794-8.373-79.027-0.374-117.793
        C199.32,453.917,192.281,479.773,193.374,505.783 M754.15,449.4c-0.086,0.959-0.154,1.918-0.192,2.896
        c0.374,0.201,1.122,0.604,1.487,0.806c59.584,136.552,18.485,207.828-31.879,293.839
        c-92.982,157.526-87.958,200.66-117.179,270.956c18.232-19.614,21.148-44.878,24.715-55.434
        c32.867-100.957,156.74-209.589,163.425-337.716C798.363,564.046,784.227,502.283,754.15,449.4 M503.795,582.806
        c-11.395,23.382-7.829,69.72,17.158,100.012c29.315-50.143,4.961-102.547-7.807-107.022
        C508.61,574.884,505.685,579.401,503.795,582.806 M628.254,683.134c-16.937,5.735-31.237,17.829-41.173,32.532
        c85.758,1.583,109.273-22.13,80.389-33.28C654.858,677.753,640.798,678.885,628.254,683.134 M394.251,697.568
        c-4.612,6.109-3.984,16.716,13.676,26.566c25.086,13.408,43.054,12.756,60.68,6.033c-6.56-10.857-14.127-21.109-22.519-30.613
        C427.977,682.546,403.063,685.277,394.251,697.568 M522.037,692.897c-11.164,16.832-26.422,31.141-44.616,40.099
        c50.701,89.058,45.722,210.942,20.323,309.472c21.205,6.723,44.347,7.816,65.85,1.822
        c-21.175-110.254-39.254-225.762,13.273-324.002C556.506,716.663,536.596,707.887,522.037,692.897 M295.409,708.252
        c15.462,43.624,49.991,106.678,69.379,148.214c1.026-1.707-1.851-4.46-2.465-6.464
        C298.757,695.155,328.927,752.942,295.409,708.252 M329.303,751.391c35.188,92.157,68.524,159.337,85.702,239.556
        c1.417,8.065,11.635,30.382,17.369,34.92c12.19,10.387,25.626,19.623,40.501,25.674c14.098,1.717,27.995,5.083,41.278,10.166
        c17.927,1.376,47.494-0.212,63.74-6.857c4.402-4.277,7.768-9.514,11.048-14.664c-39.631,22.903-93.127,15.857-122.08-7.625
        c-40.023-33.521-52.709-159.263-104.222-231.346C352.33,784.095,341.598,767.158,329.303,751.391 M714.781,826.361
        c-34.011,52.443-72.023,107.804-81.406,150.574c-9.268,40.514-32.76,52.992-34.852,58.254c-2.455,5.054-5.467,9.802-8.545,14.491
        c11.749-6.244,21.234-16.036,28.791-26.863c2.215-3.05,2.839-6.848,4.086-10.329c23.139-68.39,70.141-143.089,102.035-201.49
        C721.331,815.993,718.176,821.249,714.781,826.361 M676.217,910.567c-8.265,14.129-24.866,66.415-44.338,102.332
        c-2.311,4.671-5.975,8.699-7.241,13.859c-2.254,8.469-5.102,16.803-8.804,24.754c33.381-34.997,53.569-98.244,66.809-141.884
        c5.073-15.355,12.19-29.971,20.236-43.973C692.463,879.675,684.675,895.356,676.217,910.567 M395.143,994.917
        c2.835,6.459,20.991,40.595,39.456,61.457c-6.55-10.358-12.804-21.004-16.918-32.599
        C412.855,1012.001,420.389,1026.217,395.143,994.917 M426.945,1030.585c10.876,23.689,28.609,44.52,51.281,57.63
        c20.471,8.255,50.886,6.408,72.39,1.458c-3.184-3.261-6.723-6.157-10.569-8.593c-1.726-1.285-3.971-0.422-5.908-0.422
        c-29.242,1.765-60.191-4.719-83.305-23.555c-1.573-1.736-3.961-1.007-5.985-1.055c0.307-1.103,0.643-2.167,0.959-3.232
        C438.493,1046.352,432.412,1038.631,426.945,1030.585 M588.625,1057.112c-3.184,1.525-6.819,2.388-9.351,5.016
        c-8.67,8.459-19.862,14.194-31.697,16.64c3.616,2.762,7.203,5.611,10.128,9.13c14.846-4.287,28.954-11.221,41.221-20.668
        c5.608-4.255,13.443-22.417,16.256-30.009C607.758,1045.517,598.714,1052.375,588.625,1057.112 M444.333,1042.899
        c3.021,2.925,5.831,6.157,9.313,8.564c1.611,0.125,3.232-0.029,4.862-0.077C453.627,1048.826,449.042,1045.757,444.333,1042.899
         M457.741,1054.859c20.217,15.038,45.958,20.572,70.789,20.121c-5.649-2.839-11.422-5.658-17.522-7.356
        c-14.501-1.534-28.83-5.083-42.113-11.144C465.433,1054.744,461.462,1055.252,457.741,1054.859 M529.172,1068.122
        c10.432,6.021,11.038,6.214,12.593,5.735c8.891-1.41,17.695-4.383,25.099-9.591
        C554.511,1067.087,541.803,1067.873,529.172,1068.122 M561.666,1092.981c0.537,1.151,1.093,2.321,1.659,3.501
        c7.385-3.126,14.213-7.413,20.572-12.266C576.589,1087.381,569.319,1090.699,561.666,1092.981 M505.483,1099.82
        c15.706,3.248,28.978,5.44,51.003-0.729c-0.451-1.477-1.093-2.887-1.813-4.22C538.629,1099.024,521.989,1100.002,505.483,1099.82
         M464.291,1117.917c-19.943,2.504-37.457,8.61-41.451,11.739c13.475,5.073,27.976,6.426,42.247,7.126
        c8.258,0.537,16.362-1.458,24.552-2.072c25.324-2.881,47.78-0.681,63.96-14.923C524.147,1114.81,493.946,1114.445,464.291,1117.917
         M537.142,1131.651c24.523-1.18,49.824-1.515,73.378,6.445c1.554,0.499,3.088-0.47,4.623-0.691
        c-10.657-5.621-38.56-14.31-56.892-16.764C551.73,1125.225,544.565,1128.774,537.142,1131.651 M508.159,1138.163
        c-32.644,4.354-22.425-1.254-67.902,7.327c-2.772,0.767-6.042,0.575-8.459,2.148c5.639,3.271,11.768,5.793,18.136,7.27
        c3.516-0.16,32.461-9.692,101.556-6.023c6.397,0.182,12.88,1.535,19.21,0.038c10.742-2.225,21.55-4.354,31.966-7.855
        c-23.746-7.116-48.807-6.752-73.321-5.802C522.171,1135.363,515.237,1137.3,508.159,1138.163 M577.25,1150.785
        c5.419,1.055,10.866,2.11,16.362,2.695c6.877-2.024,13.619-4.757,19.968-8.085c-2.34-0.997-4.834-2.829-7.452-1.755
        C596.614,1146.401,587.042,1149.183,577.25,1150.785 M457.53,1156.548c26.436,4.349,73.231-1.342,90.152-3.923
        C517.616,1150.573,487.271,1151.35,457.53,1156.548 M490.129,1161.727c-12.794,0.058-25.703,0.662-38.343-1.765
        c-3.51-1.132-7.001,0.604-9.696,2.762c-0.182,1.323,1.218,1.985,2.091,2.676c20.737,11.661-6.414-1.729,94.823,2.781
        c4.569-0.189,32.836-6.992,46.342-11.825C543.608,1150.743,582.481,1155.811,490.129,1161.727 M553.427,1169.074
        c17.839,1.496,35.648,4.124,52.806,9.36c5.902-2.194,15.126-8.883,5.093-14.175c-5.831-2.944-12.171-4.661-18.452-6.311
        C580.06,1162.715,566.777,1166.177,553.427,1169.074 M463.879,1172.833c19.747,3.779,40.099,1.909,59.769-1.419
        C503.738,1170.676,483.703,1170.628,463.879,1172.833 M525.557,1174.234c-23.328,3.368-50.484,8.703-75.69,1.055
        c-8.689,0.288-16.717,4.421-25.128,6.253c7.228,1.691,112.403,17.718,173.591,0.7c-18.011-5.38-36.771-7.644-55.405-9.677
        C537.065,1171.625,531.321,1173.495,525.557,1174.234 M444.851,1201.5c-0.786,0.278-2.158,0.23-2.426,1.18
        c13.127,1.469,13.81,5.432,61.035,6.771c23.814-0.307,47.714-1.151,71.268-5.006C557.092,1199.959,484.055,1192.908,444.851,1201.5
         M494.924,1220.326c-22.423,1.391-44.894,3.664-66.761,8.967c15.499,8.114,33.174,11.164,50.476,12.343
        c68.258-3.835,44.63,1.941,81.329-4.268c11.681-2.34,23.411-5.15,34.325-10.003
        C562.183,1217.488,528.079,1218.543,494.924,1220.326 M556.093,1241.934c9.399,0.7,18.683,2.359,28.014,3.616
        c4.472-0.649,21.168-7.173,24.773-9.993c-2.35-3.194-6.157-4.623-9.6-6.272C585.604,1235.633,570.892,1239.316,556.093,1241.934
         M529.498,1244.811c-60.603,3.736-29.039-3.312-89.155,4.93c44.002,10.252,90.277,8.804,134.183-1.208
        C565.525,1247.046,538.401,1243.444,529.498,1244.811 M457.52,1278.916c-2.868,1.4-5.841,4.699-4.297,8.085
        c6.281,17.044,68.215,17.013,78.519,17.349c-0.221-7.874-0.441-15.988-3.558-23.344
        C500.468,1276.793,473.19,1271.586,457.52,1278.916 M536.221,1282.627c2.532,6.982,3.04,14.472,3.127,21.848
        c13.648,0.614,27.381,0.24,40.856-2.129C568.178,1291.154,551.941,1286.09,536.221,1282.627z"
          />
          {!props.darkOn && (
            <>
              <path
                opacity="0.82"
                enable-background="new    "
                d="M918.832,216.365c0.355,0.671,1.065,2.024,1.41,2.695
        c-45.15,26.664-81.97,60.702-86.412,64.085c-0.528-0.46-1.592-1.4-2.12-1.87C860.779,254.369,900.052,226.694,918.832,216.365z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M97.055,277.161c21.56,17.062,43.35,34.028,66.952,48.231
        c-0.508,0.556-1.525,1.659-2.024,2.206c-6.555-3.055-36.325-23.044-65.341-46.956C95.099,279.856,96.921,278.216,97.055,277.161z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M992.699,329.919c0.317,0.978,0.643,1.966,0.978,2.944
        c-28.861,9.981-72.251,26.329-98.909,41.662c-0.489-0.556-1.487-1.659-1.985-2.215
        C914.775,358.088,968.018,338.451,992.699,329.919z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M34.476,395.471c33.51,6.088,77.61,18.026,104.548,29.837
        c1.832,0.403,0.374,2.379,0.278,3.453C107.1,415.025,61.7,403.307,33.939,398.559C34.073,397.792,34.342,396.248,34.476,395.471z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M918.774,506.915c37.787-2.359,75.268-8.047,112.892-12.123
        c-0.057,0.748-0.163,2.235-0.211,2.983c-34.501,4.256-92.682,11.561-112.057,12.065
        C919.244,509.111,918.937,507.653,918.774,506.915z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M126.268,532.56c-0.01,0.681-0.019,2.033-0.029,2.714
        c-32.915,2.637-65.696,6.79-98.515,10.415c0.038-0.767,0.125-2.321,0.163-3.088C49.17,540.234,115.705,532.214,126.268,532.56z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M921.603,609.113c0.211-1.017,0.441-2.014,0.681-3.011
        c33.797,2.935,67.087,10.3,101.018,11.912c-0.057,0.7-0.173,2.1-0.23,2.8C988.978,619.778,955.554,611.933,921.603,609.113z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M98.647,721.679c23.161-12.88,46.774-25.022,70.981-35.812
        c0.374,0.94,0.767,1.889,1.16,2.839c-23.977,10.818-47.426,22.807-70.405,35.601C99.798,723.424,99.223,722.542,98.647,721.679z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M889.216,692.811c18.945,3.617,58.11,24.915,85.28,37.605
        c-0.412,0.959-0.796,1.928-1.17,2.916c-28.318-13.254-63.068-32.277-84.398-37.557
        C889.005,695.026,889.149,693.549,889.216,692.811z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M166.261,845.628c18.357-21.55,36.598-43.235,56.432-63.461
        c0.623,0.508,1.861,1.525,2.474,2.024c-19.872,20.294-38.296,41.95-56.556,63.692C167.825,847.115,167.048,846.367,166.261,845.628
        z"
              />
              <path
                opacity="0.82"
                enable-background="new    "
                d="M822.82,783.596c23.401,14.06,46.764,28.983,65.619,48.951
        c1.343,1.132-0.902,2.091-1.304,3.05c-18.683-19.642-41.48-34.641-64.584-48.519C820.671,786.377,822.465,784.651,822.82,783.596z"
              />
            </>
          )}
        </g>
      </svg>
    </>
  );
}
