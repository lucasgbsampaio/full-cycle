FROM golang:alpine AS builder

WORKDIR /go/src/app

COPY . .

RUN go mod init

RUN go build -o /main

FROM scratch

WORKDIR /

COPY --from=builder /main /main

ENTRYPOINT ["./main"]