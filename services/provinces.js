import { MyContext } from '@/context';
import React, { useEffect } from 'react'

function provinces() {
    const [state, setState] = React.useContext(MyContext);
      useEffect(() => {
    if(state.data.length > 0) {
      fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_LOGIN}/api1/Thailand-Tambon`)
        .then(response => response.json())
        .then(data => {
          const provincesData = Array.from(new Set(data.map(item => item.ProvinceThai))).sort();
          setState(prev => ({ ...prev, data, provinces: provincesData }));
        })
        .catch(error => console.error('Error fetching data: ', error));
    }
  }, [state.data]);

  return null;
}
export default provinces