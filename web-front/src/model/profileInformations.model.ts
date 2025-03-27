import NoPicture from "./../assets/placeholderImages/no_pictures.png";
import SeriousFrogPicture from "./../assets/placeholderImages/frog_lf_ltr.png";
import NatureGuyPicture from "./../assets/placeholderImages/nature_guy.png";


export interface ProfileInformations {
  profileName: string;
  profilePicture: string | File;
}

// Bad practice - but this is going to stay here for now, until I start working on a real mock system for the app.
export const MockProfileInformations: ProfileInformations[] = [
  {
    profileName: "Toto",
    profilePicture: NoPicture
  },
  {
    profileName: "Froggies",
    profilePicture: SeriousFrogPicture
  },
  {
    profileName: "SunsetEnjoyer971",
    profilePicture: NatureGuyPicture
  },
  {
    profileName: "Shy...",
    profilePicture: NoPicture
  },
]
