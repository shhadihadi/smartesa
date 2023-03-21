import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit  } from '@mui/icons-material';
import {  useEffect, useState} from'react'
import useFetch from '../../useFetch';
import DeleteIcon from "@mui/icons-material/Delete";


const SubAction = () => {

    const { data: subscribe, error, isPending } = useFetch(`http://localhost:8000/subscribe`);
   
 
  const handledelete = (id) => {
    fetch(`http://localhost:8000/subscribe/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
      
    });
  };


  return (
    <Box>
        {error && <div>{error}</div>}
              {isPending && <div>Loading...</div>}
              {subscribe &&
                subscribe.map((val) => (
     
     
      // <Tooltip key={val.id} title="Delete this posts">
     
        
     <div  className="deletoptioncard" key={val.id} >
         
                          <DeleteIcon 
                          onClick={() => handledelete(val.id)}
                          />
                      
            </div>
        
      // </Tooltip>
                ))}
    </Box>
  );
};

export default SubAction;
