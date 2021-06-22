function ChatList({ displayName, email, setSend }) {
  return (
    <div style={styles.main} className="bg-dark" onClick={()=>setSend(email)}>
      <h3 className="text-light">{ displayName } || { email }</h3>
    </div>
  );
}

const styles = {
  main: {
    margin: 0,
    padding: "0.5rem 1rem",
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
  },
}

export default ChatList;
