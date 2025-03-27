import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function ProfileOverview(
  { 
    profilePicture, 
    profileName 
  }: {
    profilePicture: string | File, 
    profileName: string
  }) {
    const [imageSrc, SetImageSrc] = useState("");

    useEffect(() => {
      if(profilePicture instanceof File) {
        const imageUrl = URL.createObjectURL(profilePicture);
        SetImageSrc(imageUrl);
      } else {
        SetImageSrc(profilePicture);
      }
    }, [profilePicture])

    return (
      <Card sx={{ width: 200, borderRadius: 3, boxShadow: 4 }}>
        <CardMedia component="img" height="200" image={imageSrc} />
        <CardContent>
          <Typography variant="h6" align="center">
            {profileName}
          </Typography>
        </CardContent>
      </Card>
  );
}