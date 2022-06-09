import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 0.5rem;
  margin-left: 4rem; */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  .wrapper {
    height: 100%;
    width: 300px;
    position: relative;
  }
  .wrapper .menu-btn {
    position: absolute;
    left: 20px;
    top: -1.5em;
    background: #fafafa;
    color: #fd3373;
    height: 45px;
    width: 45px;
    z-index: 9999;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  #btn:checked ~ .menu-btn {
    left: 142px;
    top: -1.5em;
  }

  @media (min-width: 1800px) {
    .wrapper .menu-btn {
      left: -221px;
    }

    #btn:checked ~ .menu-btn {
      left: -136px;
    }
  }

  @media (min-width: 810px) and (max-width: 900px) {
    #btn:checked ~ .menu-btn {
      left: 210px;
    }
  }

  @media (min-width: 375px) and (max-width: 500px) {
    .wrapper .menu-btn {
      top: -2em;
    }

    #btn:checked ~ .menu-btn {
      left: 220px;
      top: -2em;
    }
  }
  .wrapper .menu-btn i {
    position: absolute;
    transform: 0;
    display: flex;
    font-size: 23px;
    transition: all 0.3s ease;
  }
  .wrapper .menu-btn i.fa-times {
    opacity: 0;
  }
  #btn:checked ~ .menu-btn i.fa-times {
    color: #fd3373;
    opacity: 1;
    transform: rotate(-180deg);
  }
  #btn:checked ~ .menu-btn i.fa-bars {
    color: #fd3373;
    opacity: 0;
    transform: rotate(180deg);
  }
  #sidebar {
    position: fixed;
    background: #fd3373;
    height: 100%;
    width: 270px;
    overflow: hidden;
    top: 0;
    left: -270px;
    transition: all 0.3s ease;
  }
  #btn:checked ~ #sidebar {
    top: 0;
    left: 0;
  }
  #sidebar .title {
    line-height: 65px;
    text-align: center;
    background: #fd3373;
    font-size: 25px;
    font-weight: 600;
    color: white;
    border-bottom: 1px solid;
  }
  #sidebar .list-items {
    cursor: pointer;
    position: relative;
    background: #fd3373;
    width: 100%;
    height: 100%;
    list-style: none;
  }
  #sidebar .list-items li {
    color: white;
    padding-left: 40px;
    line-height: 50px;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    transition: all 0.3s ease;
  }
  #sidebar .list-items li:hover {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 0px 10px 3px whitesmoke;
  }
  #sidebar .list-items li:first-child {
    border-top: none;
  }
  #sidebar .list-items li {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    height: 100%;
    width: 100%;
    display: block;
  }
  #sidebar .list-items li {
    margin-right: 20px;
  }
`;
