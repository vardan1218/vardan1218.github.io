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
            <h2 className='mt-[40px]'>Random Message</h2>
            <p className='mb-[40px]'>{commitMsg}</p>
        </div>
      )
}

export default CommitMessage