export const CartFooter = () => {
  return (
    <div
      style={{
        position: "relative",
        minWidth: "978px",
        borderTop: "1px solid #ddd",
        top: "120px",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          padding: "25px",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "66.66%",
            color: "#565656",
            fontWeight: 300,
            lineHeight: "31px",
          }}
        >
          <span>
            <span class="policies-title footertitle">Policies:</span>
            <a
              style={{
                padding: "0 5px",
                borderRight: "1px solid #878787",
                color: "#565656",
              }}
              href="/returnpolicy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Returns Policy
            </a>
            <a
              style={{
                padding: "0 5px",
                borderRight: "1px solid #878787",
                color: "#565656",
              }}
              href="/s/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of use
            </a>
            <a
              style={{
                padding: "0 5px",
                borderRight: "1px solid #878787",
                color: "#565656",
              }}
              href="/s/paymentsecurity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security
            </a>
            <a
              style={{
                padding: "0 5px",
                borderRight: "1px solid #878787",
                color: "#565656",
              }}
              href="/pages/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a
              style={{
                padding: "0 5px",
                borderRight: "1px solid #878787",
                color: "#565656",
              }}
              href="https://seller.flipkart.com/fiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infringement
            </a>
          </span>
          <span style={{ marginLeft: "25px" }}>
            © 2007-2022 <span>Flipkart.com</span>
          </span>
        </div>
        <div
          style={{
            color: "#565656",
            fontWeight: 300,
            lineHeight: "31px",
          }}
        >
          <span>Need help? </span>
          <span>
            Visit the
            <a
              href="/s/help?otracker=undefined_footer_navlinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: "blue" }}>{" "}Help Center{" "}</span>
            </a>
            or
            <a
              href="/helpcentre?otracker=undefined_footer_navlinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span style={{ color: "blue" }}>Contact Us</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
