import {without} from 'lodash'
import {NextApiRequest,NextApiResponse} from 'next'

import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
        const {movieId,currentUser,isDelete}= req.body;
    try {

        if(!isDelete){
            

            const existingMovie = await prismadb.movie.findUnique({
                where:{
                    id:movieId,
                }
            });

            if(!existingMovie){
                throw new Error('Invalid ID');
            }
            
            const user = await prismadb.user.update({
                where:{
                    email:currentUser.email || ''
                },
                data:{
                    favoriteIds:{
                        push:movieId
                    }
                }
            });
           
            return res.status(200).json(user);
        }

        if(isDelete){

            const existingMovie= await prismadb.movie.findUnique({
                where:{
                    id:movieId
                }
            });

            if(!existingMovie){
                throw new Error('Invalid ID');
            }

            const updatedFavoriteIds = without(currentUser.favoriteIds,movieId);
        
            const updatedUser = await prismadb.user.update({
                where:{
                    email:currentUser.email || ''
                },
                data:{
                    favoriteIds:updatedFavoriteIds
                }
            });

            return res.status(200).json(updatedUser)
        
        }

        return res.status(405).end();

        
    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }

}