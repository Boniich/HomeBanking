import React, { useContext, useEffect, useState } from "react";
import AccountContext from "../../../../../context/accountContext/AccountContext";
import { ChangeImageInput, Input } from "../../../../../theme/inputs/input";
import { InputContainer } from "../../../../../theme/inputs/inputContainer/inputContainer";
import { ChangeImageLabel } from "../../../../../theme/labels/labels";
import { ParagraphMedium3 } from "../../../../../theme/paragraph/paragraph";
import { ProcessingRequestButton } from "../../../../common/processingRequestButtton/ProcessingRequestButton";
import { ChangeImageContainer, ChangeImageContent, ConfigurationFormContainer, ConfigurationFormContent, ConfigurationFormInputs, DeleteImageButton, Image, ImageButtonsContainer, SaveChangesButton } from "../styleConfigurationForm";
import nouUserImage from "../../../../../assets/noUserImage.png";
export const UpdateDataForm = () =>{
    const [dataUser, setDataUser] = useState({
		name: '',
		lastName: '',
		image: '',
		email: '',
	});
    const {
		name,
		lastName,
		userImage,
		userEmail,
		updateDataUser,
		updateDataUserLoader,
	} = useContext(AccountContext);

    useEffect(() => {
		setDataUser({ name, lastName, image: userImage, email: userEmail });
	}, [name]);


    function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}


	const handleChange = e => {
		setDataUser({ ...dataUser, [e.target.name]: e.target.value });
	};

	const handleChangeImage = img => {
		setDataUser({ ...dataUser, image: img });
	};

	const deleteUserImage =  async () => {
		// save the sring "img-deleted for delete img of data base. 
		// if i find some way better i will change it
		setDataUser({...dataUser, image: "img-deleted" });
	};

    const handleSubmit = e => {
		e.preventDefault();
		updateDataUser(dataUser.name, dataUser.lastName, dataUser.image);
	};

   return(
	<ConfigurationFormContainer onSubmit={handleSubmit}>
						<ConfigurationFormContent>
							<ChangeImageContainer>
								<ParagraphMedium3>Avatar</ParagraphMedium3>
								<ChangeImageContent>
									<Image src={(userImage && dataUser.image !== "img-deleted") ? `${dataUser.image}` : nouUserImage} />
									<ImageButtonsContainer>
										<ChangeImageLabel>
											Cambiar
											<ChangeImageInput
												type='file'
												accept='image/png, image/jpeg'
												onChange={async e => {
													const img = await getBase64(e.target.files[0]);
													handleChangeImage(img);
												}}
											/>
										</ChangeImageLabel>
										<DeleteImageButton onClick={deleteUserImage}>
											Eliminar
										</DeleteImageButton>
									</ImageButtonsContainer>
								</ChangeImageContent>
							</ChangeImageContainer>
							<ConfigurationFormInputs>
								<InputContainer>
									<ParagraphMedium3>Nombres</ParagraphMedium3>
									<Input
										type='text'
										name='name'
										value={dataUser.name}
										onChange={handleChange}
									/>
								</InputContainer>
								<InputContainer>
									<ParagraphMedium3>Apellidos</ParagraphMedium3>
									<Input
										type='text'
										name='lastName'
										value={dataUser.lastName}
										onChange={handleChange}
									/>
								</InputContainer>
								<InputContainer>
									<ParagraphMedium3>Email</ParagraphMedium3>
									<Input
										type='email'
										name='email'
										value={dataUser.email}
										disabled={true}
										onChange={handleChange}
									/>
								</InputContainer>
							</ConfigurationFormInputs>
							<SaveChangesButton type='submit' role='button'>
								<ProcessingRequestButton
									state={updateDataUserLoader}
									textBeforeRequest='Guardar Cambios'
								/>
							</SaveChangesButton>
						</ConfigurationFormContent>
					</ConfigurationFormContainer>
   ) 
}