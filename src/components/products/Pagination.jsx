const Pagination = ({ total, currPage, onPageChange }) => {
    const Pages = new Array(total).fill(0);
    return (
      <div style={{ display: "flex", marginTop: "10px" }}>
        {Pages.map((value, index) =>
          currPage === index + 1 ? (
            <button
              style={{
                textDecoration: "none",
                outline: "none",
                borderStyle: "none",
                cursor: "pointer",
              }}
              disabled
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          ) : (
            <button
              style={{
                textDecoration: "none",
                outline: "none",
                borderStyle: "none",
                cursor: "pointer",
              }}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    );
  };
  
  export default Pagination;