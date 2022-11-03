import React from "react";
import { AccountBackground, AccountContainer, AccountCover, AuthButton  } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
    
    
export const AccountScreen = () => {
    return <AccountBackground> 
        <AccountCover />
        <AccountContainer>
            <AuthButton icon="lock-open-outline"
      mode="contained" onPress={() => console.log('Pressed')}>
    Login
            </AuthButton>
            <Spacer size="large">
            <AuthButton icon="lock-open-outline"
      mode="contained" onPress={() => console.log('Pressed')}>
    Register
                </AuthButton>
                </Spacer>
        </AccountContainer>
    </AccountBackground>
};