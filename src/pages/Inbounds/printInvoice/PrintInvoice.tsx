import React, { useState } from 'react'
import CounterPrice from '../../../components/CounterPrice'
import { Grid, TextField, Box, MenuItem, Select, SelectChangeEvent, InputLabel, FormControl} from '@mui/material';

import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import "./index.css"

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#ffa902' : '#f5f8fa',
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#ffa902',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
	return (
		<Radio
		disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
	  />
  );
}



const PrintInvoice: React.FC = () => {
	const [discount, setDiscount]  = useState('')
	const handleChange = (event: SelectChangeEvent) => {
		setDiscount(event.target.value as string);
	  };
	return (
		<div className='block-invoice'>
			<div className="counter-item-session">
				<div className="subcontainer">

				<CounterPrice price='₦40.00' width='350px'/>
				<CounterPrice price='₦40.00' width='350px'/>
				<div className="counter-total">
					<div className='calculations'>
							<p>Subtotal</p>
							<p>₦500</p>
							<p>Discount</p>
							<p className='discount'>- ₦500</p>
							<p>VAT</p>
							<p>₦500</p>
						
					</div>
					<div className="total">
							<p>Total</p>
							<p>₦3000</p>
					</div>
					<Link to="/inbounds/order-confirmed">
					
						<div style={{
							width: '100%',
							backgroundColor: '#009fe3',
							color: 'white',
							padding: '.4em',
							marginTop: '1em',
							textAlign: 'center'
						}} >Print Invoice</div>
					</Link>
				</div>
				</div>
			</div>
			<div className="delivery-info">
				<div className="subcontainer">
					
				<h3>Delivery information</h3>
				<form action=""
				style={{
						border: '1px solid #54A4CC',
						padding: '2em',
						borderRadius: '1em'
					}}
					>
				<Grid container spacing={2}
					
				>
        			<Grid item xs={12} sm={6}>
						<TextField
							id="name" label="Name" type="text"
							placeholder="Lano Peters" fullWidth margin="normal"
						/>
						<TextField
							id="email"
							label="Email"
							type="email"
							placeholder="lanopeters392@gmail.com"
							fullWidth
							margin="normal"
						/>
						<TextField
							id="state"
							label="State"
							type="text"
							placeholder="Anambra State"
							fullWidth
							margin="normal"
						/>
					</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="mobile-number"
						label="Mobile Number"
						type="tel"
						placeholder="+2349145782934"
						fullWidth
						margin="normal"
					/>
						<TextField
							id="city"
							label="City"
							type="text"
							placeholder="Akwa"
							fullWidth
							margin="normal"
						/>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							id="zip"
							label="ZIP"
							type="text"
							placeholder="40001"
							fullWidth
							margin="normal"
						/>
					</Grid>
        			<Grid item xs={12} sm={6}>
						<TextField
							id="local-govt"
							label="Local Government"
							type="text"
							placeholder="Akwa-South"
							fullWidth
							margin="normal"
						/>
					</Grid>
				</Grid>
				</Grid>
				</Grid>
				<TextField
					id="address"
					label="Address"
					type="text"
					placeholder="Amuku Town, Anambra State"
					fullWidth
					margin="normal"
					/>
				{/* <Button type="submit" variant="contained" color="primary">
					Submit
				</Button> */}
				</form>

				<form action="">
				<h3>Schedule Delivery</h3>
				<Box
				sx={{
					border: '1px solid #54A4CC',
					borderRadius: '1em',
					padding: '2em'
				}}
				>

				<TextField
					id="Date"
					type="date"
					// placeholder="Amuku Town, Anambra State"
					fullWidth
					margin="normal"
					/>
					<TextField
					id="Note"
					label="Note"
					type="text"
					placeholder="Type your note"
					fullWidth
					margin="normal"
					/>
					</Box>
				</form>
				<form action="">
				<h3>Payment Method</h3>
					<RadioGroup
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							padding: '2em 0',
							border: '1px solid #54A4CC',
							borderRadius: '1em'
						}}
						defaultValue="bank"
						aria-labelledby="demo-customized-radios"
						name="customized-radios"
					>
						<FormControlLabel value="bank" control={<BpRadio />} label="Bank Transfer" />
						<FormControlLabel value="cash" control={<BpRadio />} label="Cash" />
						<FormControlLabel value="pos" control={<BpRadio />} label="POS" />
					</RadioGroup>
				</form>
				<form action="">
				<h3>Discount</h3>
				<Box
					sx={{
						padding: '2em',
							border: '1px solid #54A4CC',
							borderRadius: '1em'
					}}
				>

					{/* <TextField
						id="fixed"
						label="Type"
						type="text"
						placeholder="Fixed value Discount"
						fullWidth
						margin="normal"
						/> */}
						<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={discount}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"Fixed value discount"}>Fixed value discount</MenuItem>
          <MenuItem value={"Percentage discount"}>Percentage discount</MenuItem>
        </Select>
      </FormControl>
					<TextField
						id="value"
						label="Enter Value"
						type="text"
						placeholder="Enter NGN Value"
						fullWidth
						margin="normal"
						/>
				</Box>
				</form>
			</div>
			</div>
		</div>
	)
}

export default PrintInvoice
