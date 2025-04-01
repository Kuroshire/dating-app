import { ProfileOverview } from "./profileOverview";
import { MockProfileInformations, ProfileInformations } from "../model/profileInformations.model";
import { Grid } from '@mui/material';

export function ProfilesGrid() {
  const profileList: ProfileInformations[] = MockProfileInformations;
  return (
    <div>
      <Grid container columns={3} columnSpacing={2}>
          {
            profileList.map((profile) => 
              <Grid>
                <ProfileOverview {...profile} />
              </Grid>
            )
          }
          
        </Grid>
      </div>
    );
}
