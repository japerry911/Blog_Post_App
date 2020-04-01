class BlogpostsController < ApplicationController
    def index
        blogposts = Blogpost.all 

        render json: blogposts 
    end

    def show
        blogpost = Blogpost.find(params[:id])

        render json: blogpost
    end

    def create
        new_blogpost = Blogpost.create(blogpost_params)

        render json: new_blogpost
    end

    private

    def blogpost_params
        params.permit(:title, :content)
    end
end
