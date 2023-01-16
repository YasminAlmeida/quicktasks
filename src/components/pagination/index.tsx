import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import * as S from "./styles";

type Props = {
  totalPages: number;
  setPage: (value: number) => void;
  page: number;
};

export const Pagination = ({
  totalPages,
  setPage,
  page,
}: Props): JSX.Element => {
  useEffect(() => {}, [setPage, page]);

  return (
    <S.Container>
      <ReactPaginate
        forcePage={page}
        className="container"
        breakLabel="..."
        nextLabel=" »"
        onPageChange={(e) => setPage(e.selected)}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="« "
        activeClassName="active"
        pageLinkClassName="page-link"
        disabledClassName={"pagination__link--disabled"}
      />
    </S.Container>
  );
};

export default Pagination;
