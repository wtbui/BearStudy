import { useState, useEffect } from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    refreshClock()
  })

  return (
    <span>
      {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
    </span>
  );
}
export default Clock;