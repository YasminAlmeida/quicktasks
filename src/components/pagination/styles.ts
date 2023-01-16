import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 0;
  margin-top: 20px;
  ul {
    display: flex;
  }
  .previous,
  .next {
    cursor: pointer;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 0.475rem;
    transition: all 0.3s ease;
    font-weight: bold;
    a {
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
    }
    &:hover {
      &:hover {
        background-color: #f4f6fa;
        color: #9f8fff;
      }
    }
  }

  li {
    cursor: pointer;
    border: none;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 0.475rem;
    width: 40px;
    height: 40px;
    &.active {
    color: #b2b2b2;
    background-color: #ccc;
  }
    &:hover {
      background-color: #f4f6fa;
      color: #ccc;
    }
    &:focus {
      background-color: #f4f6fa;
      color: #ccc;
    }
    .page-link {
      padding: 10px 20px;
      display: block;
      text-align: center;
      text-decoration: none;
    }
  }
  .pagination__link--disabled {
    background-color: #f4f6fa;
    color: #ccc;
    cursor: not-allowed;
    border: 3px solid #f4f6fa;
    &:hover {
      background-color: #f4f6fa;
      color: #ccc !important;
    }
  }
`;
