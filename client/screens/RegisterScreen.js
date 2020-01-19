import React from "react";
import {
	AsyncStorage,
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
  Button,
  TextInput
} from "react-native";
import TabBarIcon from "../components/TabBarIcon";
// import { Input } from "react-native-elements";

export default class RegisterScreen extends React.Component {
	constructor() {
		super(); // TODO: do we need this prop? im not sure if we use it
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: ""
    }
  }
  
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.fnameContainer}>
					<TextInput
						name="FirstNameField"
						placeholder="First Name                                    "
						onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            style = {{ fontSize: 20 }}
					/>
					<TabBarIcon name={"ios-contact"} />
				</View>
				<View style={styles.lnameContainer}>
          <TextInput 
            name="LastNameField" 
            placeholder="Last Name                                    " 
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}
            style = {{ fontSize: 20 }}
          />
					<TabBarIcon name={"ios-contact"} />
				</View>
				<View style={styles.phoneContainer}>
          <TextInput 
            name="PhoneField" 
            placeholder="Phone Number                                 "
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            value={this.state.phoneNumber}
            style = {{ fontSize: 20 }}
          />
					<TabBarIcon name={"ios-call"} />
				</View>
				<View style={styles.emailContainer}>
          <TextInput 
            name="EmailField" 
            placeholder="Email                                    " 
            onChangeText={email => this.setState({ email })}
            value={this.state.email}  
            style = {{ fontSize: 20 }}
          />
					<TabBarIcon name={"ios-mail"} />
				</View>
				<View style={styles.passwordContainer}>
					<TextInput
						name="PasswordField"
            placeholder="Password                                    "
            onChangeText={password => this.setState({ password })}
            value={this.state.password}  
            secureTextEntry={true}
            style = {{ fontSize: 20 }}
					/>
					<TabBarIcon name={"ios-lock"} />
				</View>

				<Button
					title="Submit"
					color="#57c6f4"
					onPress={this._submitInAsync}
					containerStyle={{ marginTop: 50, width: 400, height: 45 }}
				/>
			</View>
		);
	}

	_submitInAsync = async () => {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.phoneNumber);


		// Communicate with server
		// let response = await fetch(process.env.SERVER_URL + "/api/users/register", {
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json",
		// 		"Content-Type": "application/json"
		// 	},
		// 	body: JSON.stringify({
		// 		email: this.state.email,
		// 		password: this.state.password,
		// 		firstName: this.state.firstName,
		// 		lastName: this.state.lastName,
		// 		accountBalance: 0,
		// 		phoneNumber: this.state.phoneNumber
		// 	})
    // });

    // Check response
    // let responseJson = await response.json();

    // https://facebook.github.io/react-native/docs/network
    
    // Need to parse response or something lol. Maybe use (req,res)?

		// If registration is successful, store the token and navigate to the main page
    let token;
    try {
      // await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log("Error with AsyncStorage: " + error)
    }
    // this.props.navigation.navigate("Main");
    
    // Else, registration failed. This could be because the email is already registered, or one of the input fields are empty
    // this.props.navigation.navigate('Auth');
	};
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 100
	},
	welcomeContainer: {
		alignItems: "center",
		marginTop: 10,
		marginBottom: 20
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10
	},
	fnameContainer: {
    width: 300,
    height: 40,
    paddingTop: 10,
		alignItems: "center",
		flexDirection: "row",
		display: "flex",
		justifyContent: "center",
    justifyContent: "space-between",
    borderBottomColor: '#000000',
    borderBottomWidth: 1
	},
	emailContainer: {
    width: 300,
    height: 40,
    paddingTop: 10,
		alignItems: "center",
		flexDirection: "row",
		display: "flex",
		justifyContent: "center",
    justifyContent: "space-between",
    borderBottomColor: '#000000',
    borderBottomWidth: 1
	},
	lnameContainer: {
    width: 300,
    height: 40,
    paddingTop: 10,
		alignItems: "center",
		flexDirection: "row",
		display: "flex",
		justifyContent: "center",
    justifyContent: "space-between",
    borderBottomColor: '#000000',
    borderBottomWidth: 1
	},
	passwordContainer: {
    width: 300,
    height: 40,
    paddingTop: 10,
		flexDirection: "row",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    justifyContent: "space-between",
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
		marginBottom: 20
	},
	phoneContainer: {
    width: 300,
    height: 40,
    paddingTop: 10,
		flexDirection: "row",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    justifyContent: "space-between",
    borderBottomColor: '#000000',
    borderBottomWidth: 1
	},

	welcomeContainer: {
		alignItems: "center",
		marginTop: -200,
		marginBottom: 50
	},
	welcomeImage: {
		width: 200,
		height: 150,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10
	}
});
