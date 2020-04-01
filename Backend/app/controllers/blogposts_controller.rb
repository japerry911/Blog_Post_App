class BlogpostsController < ApplicationController
    def index
        blogposts = Blogpost.all 

        render json: blogposts 
    end
end
