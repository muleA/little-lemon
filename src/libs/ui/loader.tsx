import {CircularProgress} from '@mui/material'
function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircularProgress size={80} />
    </div>
  );
}

export default Loader;
