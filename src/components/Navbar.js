import React, { useEffect } from "react";
import styled from "styled-components";

const Navbar = () => {
  const clickIconActive = () => {
    const icons = document.querySelectorAll(".navbar-section2 .icon");
    icons.forEach((item) => {
      item.addEventListener("click", () => {
        icons.forEach((icon) => {
          icon.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  };

  useEffect(() => {
    clickIconActive();
  }, []);

  return (
    <Nav>
      <div className="wrapper">
        <div className="navbar-section1">
          <div className="facebook-icon">
            <svg
              viewBox="0 0 36 36"
              class="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
              fill="url(#jsc_s_1n)"
              height="40"
              width="40"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  x2="50%"
                  y1="97.0782153%"
                  y2="0%"
                  id="jsc_s_1n"
                >
                  <stop offset="0%" stop-color="#0062E0"></stop>
                  <stop offset="100%" stop-color="#19AFFF"></stop>
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path
                fill="white"
                class="p361ku9c"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              ></path>
            </svg>
          </div>
          <div className="searchbar desktop">
            <div className="search-icon"></div>
            <input type="text" placeholder="Search Facebook" />
          </div>
          <div className="searchbar mobile">
            <div className="search-icon"></div>
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className="navbar-section2">
          <div className="wrap-icon">
            <div className="icon icon1 active">
              <svg
                viewBox="0 0 28 28"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3"
                height="28"
                width="28"
              >
                <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
              </svg>
              <div className="tooltip-box">Home</div>
            </div>
            <div className="icon icon2">
              <svg
                viewBox="0 0 28 28"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
                height="28"
                width="28"
              >
                <path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path>
              </svg>
              <div className="tooltip-box">Friends</div>
            </div>
            <div className="icon icon3">
              <svg
                viewBox="0 0 28 28"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
                height="28"
                width="28"
              >
                <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
              </svg>
              <div className="tooltip-box">Watch</div>
            </div>
            <div className="icon icon4">
              <svg
                viewBox="0 0 28 28"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
                height="28"
                width="28"
              >
                <path d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"></path>
              </svg>
              <div className="tooltip-box">Marketplace</div>
            </div>
            <div className="icon icon5">
              <svg
                viewBox="0 0 28 28"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
                height="28"
                width="28"
              >
                <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
              </svg>
              <div className="tooltip-box">Groups</div>
            </div>
            <div className="wrap-hamburger-menu">
              <div className="icon hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-section3">
          <div className="profile">
            <div className="wrap-thumbnail">
              <img
                src="./images/shortcut-images/user_thumbnail.jpg"
                alt="thumbnail"
                className="thumbnail"
              />
            </div>
            <div className="user-name">
              <span>Wake</span>
            </div>
          </div>
          <div className="item icon create">
            <div className="wrap-create"></div>
            <div className="tooltip-box">Create</div>
          </div>
          <div className="item icon messenger">
            <svg
              viewBox="0 0 28 28"
              alt=""
              class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
              height="20"
              width="20"
            >
              <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
            </svg>
            <div className="tooltip-box">Messenger</div>
          </div>
          <div className="item icon notifications">
            <svg
              viewBox="0 0 28 28"
              alt=""
              class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
              height="20"
              width="20"
            >
              <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
            </svg>
            <div className="tooltip-box">Notifications</div>
          </div>
          <div className="item icon account">
            <div className="wrap-account"></div>
            <div className="tooltip-box">Account</div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 3px 10px;
  background-color: #242526;
  z-index: 5;
  border-bottom: 1px solid #343536;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-section1 {
    display: flex;
    align-items: center;
    .facebook-icon {
      margin-right: 8px;
      cursor: pointer;
    }
    .searchbar {
      display: flex;
      align-items: center;
      background: #3a3b3c;
      padding: 10px 30px 10px 10px;
      border-radius: 50px;
      gap: 10px;
      min-width: 240px;
      .search-icon {
        background: url(./images/shortcut-images/all_background.png);
        background-position: -36px -468px;
        background-size: 74px 546px;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        display: inline-block;
        filter: invert(60%);
      }
      input {
        background: none;
        outline: none;
        border: none;
        color: #e4e6eb;
        font-size: 0.9375rem;
        font-family: inherit;
        filter: brightness(1.08);
        ::placeholder {
          color: #a3a6ab;
        }
      }
    }

    .searchbar.mobile {
      display: none;
      min-width: auto;
      height: 40px;
      width: 40px;
    }
  }

  .navbar-section2 {
    display: flex;
    justify-content: center;
    /* margin-right: 23%;
    max-width: 300px; */
    .wrap-icon {
      display: flex;
    }
    .icon {
      position: relative;
      margin-right: 10px;
      padding: 7px 41.5px;
      cursor: pointer;
      border-radius: 10px;
      transition: 0.2s ease;
      &:after {
        content: "";
        width: 100%;
        height: 2.5px;
        background-color: #2d88ff;
        position: absolute;
        bottom: -3px;
        left: 0;
        opacity: 0;
        border-radius: 1px;
      }
      &:hover {
        background: #3a3b3c;
        .tooltip-box {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    .icon.active {
      svg {
        fill: #2d88ff;
      }
      &:after {
        opacity: 1;
      }
    }
    svg {
      cursor: pointer;
      fill: #b0b3b8;
    }

    .wrap-hamburger-menu {
      display: none;
      .hamburger-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        .line {
          width: 22px;
          height: 2.6px;
          background-color: #b0b3b8;
          margin: 3px 0;
          border-radius: 15px;
        }
      }
    }
  }

  .navbar-section3 {
    display: flex;
    align-items: center;
    .item {
      position: relative;
      background-color: #3a3b3c;
      width: 40px;
      height: 40px;
      margin-right: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        background-color: #4b4c4f;
        .tooltip-box {
          opacity: 1;
          visibility: visible;
        }
      }
      svg {
        fill: #e4e6eb;
      }
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-right: 10px;
      transition: 0.3s ease;
      padding: 3px 10px 3px 5px;
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        background-color: #4b4c4f;
      }
      .thumbnail {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        position: relative;
        top: 2px;
      }
      .user-name {
        font-size: 0.9375rem;
        font-weight: 600;
        color: #e4e6eb;
      }
    }
    .create {
      .wrap-create {
        width: 20px;
        height: 20px;
        background: url(./images/shortcut-images/all_background.png);
        background-position: -49px -365px;
        background-size: 80px 550px;
        background-repeat: no-repeat;
        display: inline-block;
        filter: invert(89%) sepia(6%) hue-rotate(185deg);
      }
    }
    .account {
      .wrap-account {
        width: 20px;
        height: 20px;
        background: url(./images/shortcut-images/all_background.png);
        background-position: -22px -406px;
        background-size: 74px 520px;
        background-repeat: no-repeat;
        display: inline-block;
        filter: invert(89%) sepia(6%) hue-rotate(185deg);
      }
    }
  }
  .tooltip-box {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    color: #2e2e2e;
    background-color: #c8c8c8;
    padding: 5px 10px;
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease;
    /* transition-delay: 0.2s;
    transition-property: opacity; */
    white-space: nowrap;
  }

  @media (max-width: 1260px) {
    .navbar-section1 {
      .searchbar.desktop {
        display: none;
      }
      .searchbar.mobile {
        display: block;
      }
    }
    .navbar-section3 {
      .profile {
        display: none;
      }
    }
  }

  @media (max-width: 1100px) {
    .navbar-section2 {
      margin-right: 0;
      max-width: 100%;
    }
    .icon {
      max-width: 10vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 7px 2vw !important;
    }
    .wrap-hamburger-menu {
      display: block !important;
    }
    .icon4 {
      display: none !important;
    }
  }

  @media (max-width: 700px) {
    .wrap-hamburger-menu {
      margin-left: 10%;
    }
    .navbar-section2 {
      width: 100%;
      justify-content: flex-start;
      .icon:not(.hamburger-menu) {
        display: none;
      }
    }
  }
  @media (max-width: 400px) {
    .wrap-hamburger-menu {
      display: none !important;
    }
    .icon.create {
      display: none !important;
    }
    .navbar-section3 .item {
      width: 35px !important;
      height: 35px !important;
    }
  }
`;
export default Navbar;
