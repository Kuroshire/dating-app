import NoPicture from "./../assets/placeholderImages/no_pictures.png";
import SeriousFrogPicture from "./../assets/placeholderImages/frog_lf_ltr.png";
import NatureGuyPicture from "./../assets/placeholderImages/nature_guy.png";


export interface ProfileInformations {
  profileId: number;
  profileName: string;
  profilePicture: string | File;
}

// Bad practice - but this is going to stay here for now, until I start working on a real mock system for the app.
export const MockProfileInformations: ProfileInformations[] = [
  {
    profileId: 1,
    profileName: "Toto",
    profilePicture: NoPicture
  },
  {
    profileId: 2,
    profileName: "Froggies",
    profilePicture: SeriousFrogPicture
  },
  {
    profileId: 3,
    profileName: "SunsetEnjoyer971",
    profilePicture: NatureGuyPicture
  },
  {
    profileId: 4,
    profileName: "Shy...",
    profilePicture: NoPicture
  },
]
