import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface IEventFunction {
	(event: React.ChangeEvent<HTMLInputElement>): void;
}

interface IDynamicInputListProps {
	stringWidths: string[];
	onArrayInputChange: IEventFunction;
}

interface IDynamicInputListState {

}

class DynamicInputList extends React.Component<IDynamicInputListProps, IDynamicInputListState> {
	render() {
		const inputs = [];
		for (let i = 0; i < this.props.stringWidths.length; i++) {
			inputs.push(<input type="text" value={this.props.stringWidths[i]} name={i.toString()} onChange={this.props.onArrayInputChange} />);
		}
		inputs.push(<input type="text" name={inputs.length.toString()} onChange={this.props.onArrayInputChange}/>);

		return (
			<span>
			{inputs}
			</span>
		);
	}
}


interface IStringInputProps {
	updateOutput: (strPos: string[]) => void;
}

type radioType = "by_center" | "by_space" | "by_average";

interface IStringInputState {
	inputStringWidths: string[];
	radioSelect: radioType;
	firstStrPos: string,
	lastStrPos: string,
}

class StringInput extends React.Component<IStringInputProps, IStringInputState> {
	constructor(props: IStringInputProps) {
		super(props);
		this.state = {
			inputStringWidths: [],
			radioSelect: "by_center",
			firstStrPos: "",
			lastStrPos: "",
		}

    this.handleWidthArrayChange = this.handleWidthArrayChange.bind(this);
    this.handleSpacingChange = this.handleSpacingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
	}

  handleWidthArrayChange(event: React.ChangeEvent<HTMLInputElement>) {
  	let index = parseInt(event.target.name);
  	let newWidths = this.state.inputStringWidths.slice();
  	newWidths[index] = event.target.value;
  	while (newWidths.length > 0 && newWidths[newWidths.length - 1] === "") {
  		newWidths.pop();
  	}

    this.setState({inputStringWidths: newWidths});
  }

  handleSpacingChange(event: React.ChangeEvent<HTMLInputElement>) {
  	this.setState({radioSelect: event.target.value as radioType});
  }

  getStrPosByCenter(strWidths: string[]) {
  	const strPos: string[] = [];
  	let first_string_pos = parseFloat(this.state.firstStrPos);
  	let last_string_pos = parseFloat(this.state.lastStrPos);
		let num_strings = strWidths.length;
		let length = last_string_pos - first_string_pos;

		let spacing = length / (num_strings - 1);
		for (let i = 0; i < num_strings; i++) {
			strPos.push((first_string_pos + i * spacing).toString());
		}

		return strPos;
  }

  getStrPosBySpace(strWidths: string[]) {
  	const strPos: string[] = [];
  	let first_string_pos = parseFloat(this.state.firstStrPos);
  	let last_string_pos = parseFloat(this.state.lastStrPos);
		let num_strings = strWidths.length;
		let length = last_string_pos - first_string_pos;

		let taken_by_string = 0;
		// add half of the first and last strings
		taken_by_string += (parseFloat(strWidths[0]) + parseFloat(strWidths[num_strings - 1])) / 2
		// add the rest of the strings
		let i = 1;
		while (i < num_strings - 1) {
			taken_by_string += parseFloat(strWidths[i]);
			i += 1;
  	}

		// calculate the spacings
		let empty_spacing = (length - taken_by_string) / (num_strings - 1);

		// set the array
		let current_pos = first_string_pos;

		for (i = 0; i < num_strings; i++) {
			strPos.push(current_pos.toString());
			if (i === num_strings - 1) {
				break;
			}
			current_pos += parseFloat(strWidths[i]) / 2 + empty_spacing + parseFloat(strWidths[i + 1]) / 2;
		}

		return strPos;
  }


  getStrPositionsFromWidths(strWidths: string[]) {
  	if (this.state.radioSelect === "by_center" as radioType) {
  		return this.getStrPosByCenter(strWidths);
  	} else if (this.state.radioSelect === "by_space" as radioType) {
  		return this.getStrPosBySpace(strWidths);
  	} else if (this.state.radioSelect === "by_average" as radioType) {
  		let byCenter = this.getStrPosByCenter(strWidths);
  		let bySpace = this.getStrPosBySpace(strWidths);
  		let avgStrPos = [];
  		for (let i = 0; i < strWidths.length; i++) {
  			avgStrPos.push(((parseFloat(byCenter[i]) + parseFloat(bySpace[i])) / 2).toString());
  		}
  		return avgStrPos;
  	} else {
  		return [];
  	}
  }

  formatOutPut(strPosList: string[], strWidthList: string[]) {
  	for(let i = 0; i < strPosList.length; i++) {
  		strPosList[i] = "Position: " + strPosList[i] + " --- For width: " + strWidthList[i];
  	}
  }

  handleSubmit(event: React.SyntheticEvent) {
  	// check if any of the slots are empty
  	this.state.inputStringWidths.forEach((width) => {if (width === "") {return;}})

  	const strPosList: string[] = this.getStrPositionsFromWidths(this.state.inputStringWidths);
  	this.formatOutPut(strPosList, this.state.inputStringWidths);

  	this.props.updateOutput(strPosList);
  }

  handlePosChange(event: React.ChangeEvent<HTMLInputElement>) {
  	if (event.target.name === "firstStrPos") {
  		this.setState({firstStrPos: event.target.value});
  	} else if (event.target.name === "lastStrPos") {
  		this.setState({lastStrPos: event.target.value});
  	}
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<fieldset>
					<label>First string position:</label>
					<input type="text" value={this.state.firstStrPos} name="firstStrPos" onChange={this.handlePosChange} /><br />
					<label>Last string position:</label>
					<input type="text" value={this.state.lastStrPos} name="lastStrPos" onChange={this.handlePosChange} /><br />
					<label>Enter string widths:
					<DynamicInputList stringWidths={this.state.inputStringWidths} onArrayInputChange={this.handleWidthArrayChange} /></label>
					<br />
					<label>By center
					<input type="radio" name="space_type" value="by_center" onChange={this.handleSpacingChange} checked={this.state.radioSelect === "by_center" as radioType} /></label>
					<label>By spacing
					<input type="radio" name="space_type" value="by_space" onChange={this.handleSpacingChange} checked={this.state.radioSelect === "by_space" as radioType} /></label>
					<label>By average of center and spacing
					<input type="radio" name="space_type" value="by_average" onChange={this.handleSpacingChange} checked={this.state.radioSelect === "by_average" as radioType} /></label>
					<br />
					<input type="button" value="Calculate" onClick={this.handleSubmit}/>
				</fieldset>
			</form>
		);
	}
}

interface ICalculatedOutputProps {
	stringPos: string[];
	
}

interface ICalculatedOutputState {

}

class CalculatedOutput extends React.Component<ICalculatedOutputProps, ICalculatedOutputState> {
	render() {
		const valList = [];
		for (let i = 0; i < this.props.stringPos.length; i++) {
			valList.push(<li>{this.props.stringPos[i]}</li>)
		}

		return (
			<div>
				{this.props.stringPos.length !== 0 && <p>String positions:</p>}
				<ol>
					{valList}
				</ol>
			</div>
		);
	}
}

interface IStringCalculatorProps {

}

interface IStringCalculatorState {
	calculatedStringPos: string[];
}

class StringCalculator extends React.Component<IStringCalculatorProps, IStringCalculatorState> {
	constructor(props: IStringCalculatorProps) {
		super(props);
		this.state = {
			calculatedStringPos: [],
		};

		this.updateOutput = this.updateOutput.bind(this);
	}

	updateOutput(strPos: string[]) {
		this.setState({calculatedStringPos: strPos});
	}

	render() {
		return (
			<div>
				<StringInput updateOutput={this.updateOutput}/>
				<CalculatedOutput stringPos={this.state.calculatedStringPos}/>
			</div>
		);
	}
}

ReactDOM.render(
  <StringCalculator />,
  document.getElementById('root')
);
