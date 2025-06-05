import styled from "styled-components";

export const TableWrapper = styled.div`
  padding: 2rem;
  background-color: #000000;
  border-radius: 50px;
  margin: 2rem auto;
  width: 95%;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  .ant-table {
    font-size: 1rem;
  }

  .ant-table-thead > tr > th {
    background-color: #ffe712;
    color: #000;
    font-weight: bold;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
    background-color: #262626;
    color: white;
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: rgb(49, 49, 49);
  }
`;
