import React, { useState, useEffect } from 'react'

function CommitMessage() {
    const [commitMsg, setCommitMsg] = useState('')

    useEffect(() => {
        fetch('https://whatthecommit.com/index.json')
          .then(response => response.json())
          .then(data => {
            setCommitMsg(data.commit_message);
          })
          .catch(error => {
            console.error('Error fetching commit message:', error);
          });
      }, []);

      return (
        <div>
            <h2>Random Message</h2>
            <p>{commitMsg}</p>
        </div>
      )
}

export default CommitMessage