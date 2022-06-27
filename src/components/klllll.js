<p>
  {readMore ? info : `${info.substring(0, 200)}...`}
  <button onClick={() => setReadMore(!readMore)}>
    {readMore ? "show less" : "  read more"}
  </button>
</p>;
