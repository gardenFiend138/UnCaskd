@cheers.each do |cheer|
  json.set! cheer.id do
    json.partial! 'cheer', cheer: cheer
  end
end
