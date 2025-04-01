import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileInformations } from "../model/profileInformations.model";

export function ProfileOverview(
  { 
    profileId,
    profilePicture, 
    profileName 
  } : ProfileInformations
) {
    const [imageSrc, SetImageSrc] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      if(profilePicture instanceof File) {
        const imageUrl = URL.createObjectURL(profilePicture);
        SetImageSrc(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
      } else {
        SetImageSrc(profilePicture);
      }
    }, [profilePicture])

    return (
      <Card 
        sx={{ 
          width: 200, 
          borderRadius: 3, 
          boxShadow: 4,
          maxWidth: 345,
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
        onClick={() => navigate(`/profile/${profileId}`)}
      >
        <CardMedia component="img" height="200" image={imageSrc} />
        <CardContent>
          <Typography variant="h6" align="center">
            {profileName}
          </Typography>
        </CardContent>
      </Card>
  );
}